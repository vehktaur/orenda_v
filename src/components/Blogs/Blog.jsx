import { Checkbox } from "../ui/checkbox";
import blogs from "@/data/blogData";
import { FaClipboardQuestion } from "react-icons/fa6";
import Button from "../ui/custom-button";
import GetStarted from "../About/GetStarted";
import { cn } from "@/lib/utils";
import { useParams } from "react-router-dom";
import { zocLink } from "@/lib/definitions";

const FeelingOverwhelmed = ({ className }) => {
  return (
    <div
      className={cn(
        "mt-12 rounded-3xl border border-orenda-purple bg-purple-100 px-5 pb-8 pt-10 text-center md:mt-16",
        className,
      )}
    >
      <h2 className="mb-4 font-heading font-bold ~text-lg/2xl">
        Feeling Overwhelmed?
      </h2>

      <p className="~text-sm/[0.9rem]">
        Don't hesitate to reach out. Schedule a session with Orenda Psychiatry
        today and take the first step towards improving your mental health
      </p>

      <Button
        link
        className="mt-6 max-w-32 cursor-pointer py-2 sm:mx-auto"
        to={zocLink}
      >
        Book Now
      </Button>
    </div>
  );
};

const OrendaTipHeading = ({ className }) => {
  return (
    <div className={cn(className)}>
      <h3 className="mb-6 font-bold ~text-sm/base">Orenda Tip</h3>

      <h2 className="font-heading font-bold ~text-xl/3xl">
        Fun Ways to Infuse Joy into Your Holidays
      </h2>
    </div>
  );
};

const Blog = () => {
  const { title } = useParams();

  const blog = blogs.find((blog) => blog.title === decodeURIComponent(title));

  const listItems = [
    "Gift Shopping",
    "Financial pressure",
    "Lack of time",
    "Family dynamics",
    "Grief",
  ];

  return (
    <section className="~text-sm/base">
      {/* Blog Hero Section */}
      <header className="relative flex flex-col justify-end bg-christmas bg-cover text-white ~px-5/20 ~pt-28/64 ~pb-10/20">
        <div className="absolute inset-0 z-0 bg-black/50" />
        <div className="z-[1] mx-auto flex w-full max-w-7xl flex-col justify-between gap-4 sm:flex-row-reverse sm:items-end">
          {/* Date Published*/}
          <div className="sm:mb-2">
            <p>{blog.created_at}</p>
          </div>

          {/* Title and description */}
          <div>
            <h1 className="font-heading font-bold ~text-2xl/5xl ~mb-4/8">
              {blog.title}
            </h1>
            <p className="max-w-2xl ~text-base/xl">{blog.description}</p>
            <div className="mt-8 flex select-none items-center font-medium ~text-xs/sm ~gap-2/4 *:cursor-pointer *:rounded-md *:border *:border-white *:py-1 *:backdrop-blur-sm *:~px-2/3">
              {blog.categories.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
              <span>{blog.duration}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-10 font-open-sans">
        <div className="mx-auto grid grid-cols-1 ~gap-6/16 md:grid-cols-blog">
          {/* Left Column */}
          <section className="px-5 sm:~ps-7/10">
            <div className="mx-auto max-w-[48rem]">
              <div className="space-y-6">
                <p className="first-letter:float-left first-letter:-mt-1 first-letter:mr-2 first-letter:font-medium first-letter:leading-none first-letter:~text-4xl/6xl">
                  The holiday season is often portrayed as a time of joy,
                  togetherness, and celebration. Yet, for many, it brings
                  stress, anxiety, and even sadness. If the holidays leave you
                  feeling more frazzled than festive, you're not alone. Studies
                  show that 38% of people report increased stress during the
                  holiday season, citing financial strain, family dynamics, and
                  time pressure as major contributors (
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
                  But don't worry—there are ways to navigate these challenges
                  and rediscover the magic of the season. Let's unpack why the
                  holidays can be stressful and explore some practical
                  strategies to help you manage your mental health during this
                  time.
                </p>
              </div>
              <div className="mt-8">
                <h2 className="font-heading font-bold ~text-xl/3xl">
                  Now, why exactly do holidays bring stress?
                </h2>
                <div className="mb-10 max-w-2xl overflow-hidden rounded-3xl ~mt-6/10">
                  <img
                    className="size-full object-cover"
                    src={blog.image[0]}
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
                      Gift-giving, parties, and year-end expenses can quickly
                      pile up. According to a 2022 survey by Bankrate, 41% of
                      Americans feel financially stressed during the holidays.
                      The pressure to meet expectations can lead to overspending
                      and lingering debt.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Family Expectations
                    </h3>
                    <p>
                      Holiday gatherings often come with high expectations.
                      Unresolved conflicts, managing different personalities, or
                      simply hosting can feel overwhelming. The pressure to
                      create a "perfect" holiday experience adds to the tension.
                    </p>
                  </li>
                  <FeelingOverwhelmed className="!my-10 ~-ml-4/8 md:hidden" />
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Grief and Loss
                    </h3>
                    <p>
                      For those who've lost loved ones, the holidays can
                      intensify feelings of sadness and grief. Empty seats at
                      the table or cherished traditions that now feel hollow can
                      be especially challenging.
                    </p>
                  </li>
                  <li>
                    <h3 className="mb-2 font-bold ~text-lg/xl">
                      Social Pressure
                    </h3>
                    <p>
                      The portrayal of idealized holidays on social media can
                      make us feel inadequate. Comparing ourselves to others'
                      curated lives often leads to stress, loneliness, or
                      self-doubt.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="mt-10 flex justify-between rounded-3xl bg-orenda-purple bg-logo bg-[length:7.5rem] bg-fixed bg-repeat-round text-white ~px-4/8 ~py-7/14">
                <div>
                  <h2 className="font-heading font-bold ~text-lg/3xl">
                    What stresses you out the most during the holidays?
                  </h2>

                  <ul className="~text-xs/base ~mt-4/6 ~space-y-3/6">
                    {listItems.map((item) => {
                      return (
                        <li key={item}>
                          <label className="flex items-center ~gap-2/3">
                            <Checkbox className="peer rounded-md ~size-4/5" />
                            <span className="peer-data-[state=checked]:line-through">
                              {item}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="content-center">
                  <FaClipboardQuestion className="rotate-[10deg] text-lime ~size-24/56" />
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
                    <h3 className="mb-2 font-bold ~text-lg/xl">Seek Support</h3>
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

          {/* Orenda Tip and When to Seek Help */}
          <div className="md:order-last md:col-span-2">
            <div className="padding-inline mx-auto mt-5 max-w-7xl md:mt-0">
              <OrendaTipHeading className="sm:hidden" />

              <div className="items-center ~mt-6/10 sm:mt-0 sm:flex sm:flex-row-reverse sm:~gap-10/20">
                <div className="mb-10 max-w-sm overflow-hidden rounded-3xl sm:mb-0">
                  <img
                    className="size-full object-cover"
                    src={blog.image[1]}
                    alt={blog.title}
                    width={840}
                    height={480}
                  />
                </div>

                <div>
                  <OrendaTipHeading className="mb-8 hidden sm:block" />
                  <ol className="list-decimal ~space-y-4/6 ~ps-4/8 marker:font-bold marker:~text-lg/xl">
                    <li>
                      <h3 className="mb-2 font-bold ~text-lg/xl">
                        Start a New Tradition
                      </h3>
                      <p>
                        Feeling weighed down by old routines? Create a new
                        tradition that brings you joy—like a movie night, baking
                        cookies with friends, or volunteering at a local
                        shelter.
                      </p>
                    </li>
                    <li>
                      <h3 className="mb-2 font-bold ~text-lg/xl">
                        Create a “Joy Jar”
                      </h3>
                      <p>
                        Write down small moments of happiness throughout the
                        season and add them to a jar. At the end of the
                        holidays, read them to reflect on the positive
                        highlights.
                      </p>
                    </li>
                    <li>
                      <h3 className="mb-2 font-bold ~text-lg/xl">
                        Unplug from Technology
                      </h3>
                      <p>
                        Take a break from social media and screens. Engage in
                        activities like board games, crafting, or storytelling
                        to foster meaningful connections with loved ones.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="padding-inline bg-purple-50 bg-dotted bg-cover pb-20 ~mt-6/10 ~pt-14/20">
              <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-heading font-bold ~text-xl/3xl ~mb-2/4">
                    When To Seek Help
                  </h2>

                  <p className="mb-2">
                    If holiday stress is something you deal with, it may be time
                    to seek professional help.
                  </p>
                  <p className="mb-4">Signs to watch for include:</p>

                  <ul className="list-disc space-y-2 text-left ~mb-4/6 ~ps-4/8 *:mx-auto *:max-w-[24rem] marker:font-bold marker:~text-lg/xl">
                    <li>Persistent feelings of sadness or hopelessness.</li>
                    <li>Difficulty sleeping or changes in appetite.</li>
                    <li>Lack of interest in activities you usually enjoy.</li>
                    <li>Trouble concentrating or making decisions.</li>
                  </ul>

                  <p>
                    At Orenda Psychiatry, we're here to support you. Our
                    compassionate providers can help you navigate the
                    complexities of the holiday season with tailored strategies
                    and care.
                  </p>

                  <p className="mt-8 font-semibold text-orenda-green">
                    It is YOUR holiday, so make it YOURS.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <aside className="px-5 md:mr-auto lg:~pe-0/16">
            <div className="border-t border-black pt-8 md:mr-auto md:max-w-80 md:border-none md:pt-0">
              <div className="flex items-center gap-5 pb-10 sm:pb-2">
                <div className="size-14 overflow-hidden rounded-full border border-[#999]">
                  <img
                    className="size-full object-cover"
                    src={blog.author.image}
                    alt={blog.author.name}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium">{blog.author.name}</h3>
                  <p className="~text-xs/[0.8rem]">{blog.author.credentials}</p>
                </div>
              </div>
              <hr className="mt-4 hidden h-[1px] rounded-full border-none border-black bg-[#ccc] md:block" />
              <FeelingOverwhelmed className="hidden md:block" />

              <div className="rounded-3xl border border-orenda-green bg-lime px-9 py-10 font-semibold italic ~mt-0/16 ~mb-8/16">
                <blockquote>
                  &mdash;{" "}
                  <q>
                    It is the season, and society sometimes poses some
                    unrealistic expectations. Be kind to yourself and remember
                    that it's okay to take a step back.
                  </q>
                </blockquote>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <GetStarted className="!mt-0" />
    </section>
  );
};
export default Blog;
