import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateChallengeMutation } from "../api/createChallenge";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../app/firebase";

const ChallengeFormSchema = yup.object({
    title: yup.string().required("This field is required"),
    description: yup.string().required("This field is required"),
    image: yup.mixed().required("This field is required")
});
type ChallengeFormValues = yup.InferType<typeof ChallengeFormSchema>;

const ChallengeForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ChallengeFormValues>({
        resolver: yupResolver(ChallengeFormSchema)
    });
    const { mutate: createChallenge } = useCreateChallengeMutation();

    const onSubmit = async (data: ChallengeFormValues) => {
        const uploadedImage = (data.image as FileList)[0];
        const imageRef = ref(storage, `${uploadedImage.name}-${Date.now()}`);
        const snapshot = await uploadBytes(imageRef, uploadedImage);
        const downloadURL = await getDownloadURL(snapshot.ref);
        
        const challengeData = {
            ...data,
            image: downloadURL
        };
        createChallenge(challengeData);
    };

    return (
        <form className="flex flex-col max-w-2xl mx-auto w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("title")}
                type="text"
                placeholder="Name your challenge"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.title && (
                <p className="text-red-500 mt-1">{errors.title.message}</p>
            )}
            <textarea
                {...register("description")}
                placeholder="Describe your challenge"
                className="textarea textarea-primary"
            />
            {errors.description && (
                <p className="text-red-500 mt-1">{errors.description.message}</p>
            )}
            <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
            />
            <button type="submit" className="btn btn-primary mt-4">
          Submit
            </button>
        </form>
    );
};

export default ChallengeForm;