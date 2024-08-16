/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useCallback, useEffect } from "react";

export default function PostForm({ post }) {
	const { register, handleSubmit, watch, setValue, control, getValues } =
		useForm({
			//Passing  object means that what the form will initially
			defaultValues: {
				// title:'' //initially title will be none user will set title of todo but what if user come to edit the todo then what we will do then we will use this logic.

				// ? But how will we access its past title or other things ?

				//As this component is used to post the post so we will pass the post as a prop

				title: post?.title || "",
				slug: post?.slug || "",
				content: post?.content || "",
				status: post?.status || "active",
			},
		});
	const navigate = useNavigate();
	const userData = useSelector((state) => state.user.userData);

	//If user has submitted the form

	const submit = async (data) => {
		if (post) {
			const file = data.image[0]
				? appwriteService.uploadFile(data.image[0])
				: null; //now we got the file

			if (file) {
				//deleting existing file
				appwriteService.deleteFile(post.featuredImage);
			}
			//updating post
			const dbPost = await appwriteService.updatePost(post.$id, {
				...data,
				featuredImage: file ? file.$id : undefined,
			});
			if (dbPost) {
				navigate(`/post/${dbPost.$id}`);
			}
		} //In else case user wants to create a new form
		else {
			const file = await appwriteService.uploadFile(data.imgae[0]);

			if (file) {
				const fileId = file.$id;
				data.featuredImage = fileId;
				const dbPost = await appwriteService.createPost({
					...data,
					userId: userData.$id,
				});
				if (dbPost) {
					navigate(`/post/${dbPost.$id}`);
				}
			}
		}
	};
	//Slug Transform into '-'

	const slugTransform = useCallback((value) => {
		if (value && typeof value === "string") {
			return value
				.trim()
				.toLowerCase()
				.replace(/^[a-zA-Z\d\s]+/g, "-")
				.replace(/\s/g, "-");
		}
		return "";
	}, []);

	//Using slug transform

	//? Interview question how can we optimize useEffect ?

	// we can optimize it by using a second callback method in it's return and unsubscribe the subcribtion so that it doesn't end up in its own cycle of executing on itself. It is used for memory management

	useEffect(() => {
		const subscription = watch((value, { name }) => {
			if (name === "title") {
				setValue(
					"slug",
					slugTransform(value.title, { shouldValidate: true })
				);
			}
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [watch, setValue, slugTransform]);

	return (
		<form onSubmit={() => handleSubmit(submit)} className="flex flex-wrap">
			<div className="w-2/3 px-2">
				<Input
					label="Title"
					placeHolder="Title"
					className="mb-4"
					{...register("title", { required: true })}
				/>

				<Input
					label="Slug"
					placeHolder="Slug"
					className="mb-4"
					{...register("slug", { required: true })}
					//Its value will be automatically set as as the slug transform executes
					onInput={(e) => {
						setValue("slug", slugTransform(e.currentTarget.value), {
							shouldValidate: true,
						});
					}}
				/>
				<RTE
					label="Content : "
					name="content"
					control={control}
					defaultValue={getValues("content")}
				/>
			</div>

			<div className="w-1/3 px-2">
				<Input
					label="Featured Image :"
					type="file"
					className="mb-4"
					accept="image/png , image/jpg , image/jpeg , image/gif"
					{...register("image", { required: !post })}
				/>
				{post && (
					<div className="w-full mb-4">
						<img
							src={appwriteService.getFilePreview(
								post.featuredImage
							)}
							alt={post.title}
							className="rounded-lg"
						/>
					</div>
				)}
				<Select
					options={["active", "inactive"]}
					label="Status"
					className="mb-4"
					{...register("status", { required: true })}
				/>
				<Button
					type="submit"
					bgColor={post ? "bg-green-500" : undefined}
					className="w-full"
				>
					{post ? "Update" : "Submit"}
				</Button>
			</div>
		</form>
	);
}
