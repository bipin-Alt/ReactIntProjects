import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleOnSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
         Complain Form 
        </h1>

        <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-5">
          {/* Email Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="example@gmail.com"
              className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">Enter the email.</p>
            )}
          </div>

          {/* Name Field */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name", { required: true})}
              type="text"
              placeholder="Enter your name"
              className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                Please enter your name!
              </p>
            )}
          </div>
          {/* About Complaint */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">
              Complain
            </label>
            <input
              {...register("complain", { required: true})}
              type="textarea"
              placeholder="Please explain your issue here."
              className={`border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.complain ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.complain?.type === "required" && (
              <p className="text-red-600 text-sm mt-1">
                We will be glad to know our weaknesses.
              </p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
