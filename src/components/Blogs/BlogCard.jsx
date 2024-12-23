import { LeftArrowIcon, LineIcon, RightArrowIcon } from "@/assets/svgs";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={decodeURIComponent(blog.title)}
      className="bg-off-white hover:bg-purple-mist border-light-grey block rounded-2xl border px-5 pb-10 pt-6 transition-colors ~max-w-[22rem]/96"
    >
      <div className="flex w-full flex-col">
        {/* Card category */}
        <div className="flex items-center gap-3 ~mb-4/6">
          {blog.categories.slice(0, 2).map((category) => (
            <BlogCategory key={category} category={category} />
          ))}
        </div>

        {/* Card heading */}
        <h2 className="mb-4 font-heading font-bold ~text-base/[1.75rem]">
          {blog.title}
        </h2>
        {/* Blog description */}
        <p className="line-clamp-6 min-h-40 ~text-sm/base">
          {blog.description}
        </p>

        {/* Blog created_at */}
        <div className="flex items-center">
          <LeftArrowIcon className="mr-1 size-6" fill="none" />{" "}
          {blog.created_at}
          <span className="ml-2 flex items-center">
            <LineIcon className="-mr-2 h-6" />
            <RightArrowIcon className="mt-0.5 h-6" fill="none" />
          </span>
        </div>
      </div>
    </Link>
  );
};
export default BlogCard;

// BlogCategory Component
const BlogCategory = ({ category }) => (
  <div className="border-light-grey w-fit rounded-3xl border bg-white px-3 py-2 text-sm capitalize">
    {category}
  </div>
);
