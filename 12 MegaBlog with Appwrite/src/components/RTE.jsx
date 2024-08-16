/* eslint-disable react/prop-types */
import { Editor } from "@tinymce/tinymce-react";

// //If we need to simply return Editor then it would be very easy

// export default function RTE() {
// 	return (
// 		<Editor
// 			initialValue="defaul value"
// 			init={{
// 				branding: false,
// 				height: 500,
// 				menubar: false,
// 				plugins: [
// 					"advlist autolink lists link image charmap print preview anchor",
// 					"searchreplace visualblocks code fullscreen",
// 					"insertdatetime media table paste code help wordcount",
// 				],
// 				toolbar:
// 					"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignrightalignjustify | bullist numlist outdent indent | removeformat | help",
// 			}}
// 		/>
// 	);
// }

//But we designing our Editor at sperate place and we have to use it somewhere else so we need its ref , we can do this thing by using forward ref but we are doing this word using react-hook-form

//For that purpose we will use Controller from react-hook-form

import { Controller } from "react-hook-form"; //It tells us that to pass refrence to other component we don't need forwardRef hook in react-hook-form.
//We will give everything in the controller whatever we want to add into it.

export default function RTE({ name, control, label, defaultValue = "" }) {
	//control (prop) is came from react-hook and it is reponsible for sending all the state changes from this editor to other form and will be used when RTE is used
	//Control will pass on control other component which calls it
	return (
		<div className="w-full">
			{label && <label className="inline-block mb-1 pl-1">{label}</label>}
			<Controller
				name={name || "content"}
				control={control}
				render={({ field: { onChange } }) => (
					<Editor
						initialValue={defaultValue}
						init={{
							initialValue: defaultValue,
							height: 500,
							menubar: true,
							plugins: [
								"image",
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"preview",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"code",
								"help",
								"wordcount",
								"anchor",
							],
							toolbar:
								"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
						onEditorChange={onChange}
					/>
				)}
			/>
		</div>
	);
}
