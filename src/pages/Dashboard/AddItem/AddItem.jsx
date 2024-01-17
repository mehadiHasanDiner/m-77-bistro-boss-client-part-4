import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const image_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { name, category, price, recipe } = data;
          const newItem = { name, category, price:parseFloat(price), recipe, image: imgURL };
          console.log(newItem);
        }
      });
  };

  return (
    <div className="w-full px-4">
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </div>
          <input
            type="text"
            placeholder="Recipe name"
            className="input input-bordered w-full "
            {...register("name", { required: true, maxLength: 120 })}
          />
          {errors.name && (
            <span className="text-red-700">This field required</span>
          )}
        </label>

        <div className="flex my-4">
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="salad">Salad</option>
              <option value="deshi">Deshi</option>
              <option value="drinks">Drinks</option>
              <option value="dessert">Dessert</option>
            </select>
          </label>

          <label className="form-control w-full ml-4">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text"> Recipe Detail</span>
          </div>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </label>

        <label className="form-control w-full my-4">
          <div className="label">
            <span className="label-text">Item Image</span>
          </div>
          <input
            {...register("image", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </label>

        <input
          className="btn btn-sm mt-4 btn-outline "
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
