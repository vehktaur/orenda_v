import blogs from "@/data/blogData";
import Newsletter from "../Contact Us/Newsletter";
import BlogCard from "./BlogCard";
import { cn } from "@/lib/utils";
import { useSearchParams } from "react-router-dom";

const Blogs = () => {
  const categories = [
    "",
    "holidays",
    "anxiety",
    "depression",
    "therapy",
    "psychology",
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "";

  const setActiveCategory = (category) => {
    if (category === "") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const filterByCategory = (category) => {
    if (category === "") return blogs;
    return blogs.filter((blog) => blog.categories.includes(category));
  };

  const filteredBlogs = filterByCategory(activeCategory);

  return (
    <>
      <section className="padding-inline ~pt-4/16">
        {/* Page Heading */}
        <h1 className="heading ~mb-2/4">Our Blogs</h1>

        {/* Categories Filter */}

        <div className="mx-auto flex w-fit max-w-full items-center overflow-x-auto text-orenda-purple ~text-sm/base ~mt-5/10 ~gap-x-4/10 scrollbar-none md:justify-center">
          {categories.map((category) => (
            <button
              onClick={() => setActiveCategory(category)}
              className={cn(
                "w-fit flex-shrink-0 rounded-3xl border border-light-grey px-4 py-2 capitalize transition-colors hover:bg-purple-50 md:flex-shrink",
                {
                  "bg-purple-mist": activeCategory === category,
                },
              )}
            >
              {category || "All Categories"}
            </button>
          ))}
        </div>

        {/* Blog cards  */}

        <section className="~mt-10/14 ~mb-12/[4.69rem]">
          {filteredBlogs?.length ? (
            <div className="mx-auto grid max-w-7xl justify-items-center ~gap-10/12 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="pb-4 text-center font-medium ~text-base/lg ~pt-2/4">
              No blogs found.
            </div>
          )}
        </section>
      </section>
      {/* Newsletter Component */}
      <Newsletter />
    </>
  );
};
export default Blogs;
