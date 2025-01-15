import partnersImages from "@/assets/partners/partnersImages";
import { cn } from "@/lib/utils";

export const Image = ({ className, src, alt = "" }) => {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-full border-2 border-orenda-purple bg-purple-mist p-1 ~size-8/16",
        className,
      )}
    >
      <img
        className="size-full rounded-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
};

const Partnerships = () => {
  return (
    <div className="relative grid place-items-center rounded-full border-2 border-light-grey ~size-56/[28rem]">
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid place-items-center rounded-full border-2 border-light-grey ~size-20/40">
          <Image
            src={partnersImages.logo}
            className="static border-none p-0 ~size-12/24"
          />
        </div>
      </div>

      <div className="relative grid animate-spin place-items-center rounded-full border-2 border-light-grey ~size-40/80 [animation-duration:20s]">
        <Image
          src={partnersImages.greenpoint}
          className="left-0 top-[15%] -translate-x-[15%]"
        />
        <Image
          src={partnersImages.mind}
          className="right-0 top-[15%] translate-x-[15%]"
        />
        <Image
          src={partnersImages.mountainside}
          className="top-0 -translate-y-1/2"
        />
        <Image src={partnersImages.nocd} className="bottom-0 translate-y-1/2" />
        <Image
          src={partnersImages.wondermed}
          className="bottom-[15%] left-0 -translate-x-[15%]"
        />
        <Image
          src={partnersImages.charlie_health}
          className="bottom-[15%] right-0 translate-x-[15%]"
        />
      </div>
    </div>
  );
};
export default Partnerships;
