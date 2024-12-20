import { Checkbox } from "../ui/checkbox";
import blogs from "@/data/blogData";

const Blog = () => {
  const blog = blogs[0];

  return (
    <section className="~text-sm/base">
      {/* Blog Hero Section */}
      <header className="relative flex flex-col justify-end bg-christmas bg-cover text-white ~px-5/20 ~pt-28/64 ~pb-10/20">
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="z-[1] flex flex-col justify-between gap-4 sm:flex-row-reverse sm:items-center">
          {/* Date Published*/}
          <div>
            <p>{blog.date}</p>
          </div>

          {/* Title and description */}
          <div>
            <h1 className="font-heading font-bold ~text-2xl/5xl ~mb-4/8">
              {blog.title}
            </h1>
            <p className="max-w-2xl ~text-base/xl">{blog.subtitle}</p>
            <div className="mt-8 flex items-center font-medium ~text-xs/base ~gap-2/4 *:rounded-md *:border *:border-white *:py-1 *:backdrop-blur-sm *:~px-2/3">
              {blog.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span>{blog.duration}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="padding-inline py-10 font-open-sans">
        <div className="mx-auto flex max-w-7xl flex-col ~gap-16/24 md:flex-row md:justify-between">
          {/* Left Column */}
          <section className="md:basis-[70%]">
            <div className="space-y-6">
              <p className="first-letter:float-left first-letter:-mt-1 first-letter:mr-2 first-letter:font-medium first-letter:leading-none first-letter:~text-4xl/6xl">
                The holiday season is often portrayed as a time of joy,
                togetherness, and celebration. Yet, for many, it brings stress,
                anxiety, and even sadness. If the holidays leave you feeling
                more frazzled than festive, you're not alone. Studies show that
                38% of people report increased stress during the holiday season,
                citing financial strain, family dynamics, and time pressure as
                major contributors (
                <a
                  className="font-dm-sans font-medium text-blue-800"
                  href="https://www.apa.org"
                  target="_blank"
                >
                  American Psychological Association, 2022
                </a>
                ).
              </p>
              <p>
                But don't worry—there are ways to navigate these challenges and
                rediscover the magic of the season. Let's unpack why the
                holidays can be stressful and explore some practical strategies
                to help you manage your mental health during this time.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="font-heading font-bold ~text-xl/3xl">
                Now, why exactly do holidays bring stress?
              </h2>

              <div className="mb-10 ~mt-6/10 max-w-2xl overflow-hidden rounded-3xl">
                <img
                  className="size-full object-cover"
                  src={blog.image}
                  alt={blog.title}
                  width={840}
                  height={480}
                />
              </div>

              <ol className="list-decimal ~space-y-4/6 ~ps-4/8 marker:font-bold marker:~text-lg/xl">
                <li>
                  <h3 className="mb-2 font-bold ~text-lg/xl">
                    Financial Strain
                  </h3>
                  <p>
                    Gift-giving, parties, and year-end expenses can quickly pile
                    up. According to a 2022 survey by Bankrate, 41% of Americans
                    feel financially stressed during the holidays. The pressure
                    to meet expectations can lead to overspending and lingering
                    debt.
                  </p>
                </li>
                <li>
                  <h3 className="mb-2 font-bold ~text-lg/xl">
                    Family Expectations
                  </h3>
                  <p>
                    Holiday gatherings often come with high expectations.
                    Unresolved conflicts, managing different personalities, or
                    simply hosting can feel overwhelming. The pressure to create
                    a "perfect" holiday experience adds to the tension.
                  </p>
                </li>
                <li>
                  <h3 className="mb-2 font-bold ~text-lg/xl">Grief and Loss</h3>
                  <p>
                    For those who've lost loved ones, the holidays can intensify
                    feelings of sadness and grief. Empty seats at the table or
                    cherished traditions that now feel hollow can be especially
                    challenging.
                  </p>
                </li>
                <li>
                  <h3 className="mb-2 font-bold ~text-lg/xl">
                    Social Pressure
                  </h3>
                  <p>
                    The portrayal of idealized holidays on social media can make
                    us feel inadequate. Comparing ourselves to others' curated
                    lives often leads to stress, loneliness, or self-doubt.
                  </p>
                </li>
              </ol>

              <div className="mt-10 rounded-3xl bg-orenda-purple bg-logo bg-[length:7.5rem] bg-fixed bg-repeat-round text-white ~px-4/8 ~py-8/14">
                <div>
                  <h2 className="font-heading font-bold ~text-lg/3xl">
                    What stresses you out the most during the holidays?
                  </h2>

                  <ul className="mt-6 ~text-xs/base ~space-y-4/6">
                    <li>
                      <label className="flex items-center gap-3">
                        <Checkbox className="peer size-5 rounded-md" />
                        <span className="peer-data-[state=checked]:line-through">
                          Gift Shopping
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-3">
                        <Checkbox className="peer size-5 rounded-md" />
                        <span className="peer-data-[state=checked]:line-through">
                          Financial pressure
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-3">
                        <Checkbox className="peer size-5 rounded-md" />
                        <span className="peer-data-[state=checked]:line-through">
                          Lack of time
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-3">
                        <Checkbox className="peer size-5 rounded-md" />
                        <span className="peer-data-[state=checked]:line-through">
                          Family dynamics
                        </span>
                      </label>
                    </li>
                    <li>
                      <label className="flex items-center gap-3">
                        <Checkbox className="peer size-5 rounded-md" />
                        <span className="peer-data-[state=checked]:line-through">
                          Grief
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-16">
                <h2 className="font-heading font-bold ~text-xl/3xl ~mb-2/5">
                  Practical Tips to Manage Holiday Stress
                </h2>

                <p className="mb-5">
                  Here are some effective strategies to help you stay grounded
                  and make the most of the season:
                </p>

                <ol className="list-decimal ~space-y-4/6 ~ps-4/8 marker:font-bold marker:~text-lg/xl">
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Set Realistic Expectations
                    </h3>
                    <p>
                      Not every moment has to be perfect. Focus on what truly
                      matters to you and let go of the need to meet everyone's
                      expectations. Remember, your presence is more valuable
                      than the presents.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">Stay Active</h3>
                    <p>
                      Physical activity is a natural stress reliever. Go for a
                      brisk walk, try a holiday-themed workout, or even dance to
                      your favorite festive tunes. Exercise boosts endorphins
                      and helps counteract the effects of stress.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Create a Budget
                    </h3>
                    <p>
                      Plan your holiday spending in advance. Allocate specific
                      amounts for gifts, decorations, and events—and stick to
                      it. Homemade gifts or shared experiences can be just as
                      meaningful as expensive items.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Set Boundaries
                    </h3>
                    <p>
                      It's okay to say no. Whether it's declining an invitation
                      or setting limits on how much you take on, protecting your
                      time and energy is essential.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      {" "}
                      Seek Support
                    </h3>
                    <p>
                      If feelings of stress or sadness become overwhelming,
                      reach out. Talk to a trusted friend, family member, or
                      mental health professional. Sometimes, sharing your
                      thoughts can provide relief and perspective.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Right column */}
          <aside className="md:basis-[30%]">
            <div className="flex items-center gap-5">
              <div className="size-14 overflow-hidden rounded-full border border-[#999]">
                <img
                  className="size-full object-cover"
                  src={blog.author.image}
                  alt={blog.author.name}
                />
              </div>

              <div>
                <h3 className="text-base font-medium">{blog.author.name}</h3>
                <p className="~text-xs/sm">{blog.author.credentials}</p>
              </div>
            </div>

            <hr className="h-[1px] rounded-full border-none border-black bg-[#ccc] ~my-5/8" />

            <div>
              <h2>Feeling Overwhelmed?</h2>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
export default Blog;
