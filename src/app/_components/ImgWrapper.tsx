import clsx from "clsx";
import Image from "next/image";

function ImgWrapper() {
  return (
    <div
      className={clsx(
        "relative mx-auto rounded-xl overflow-clip cover w-48 aspect-square"
      )}
    >
      <Image
        src="/profile-photo.jpg"
        alt="Picture of the developer"
        width={228}
        height={513}
        placeholder="blur"
        blurDataURL="/profile-photo-tiny.jpg"
        priority={true}
        layout="responsive"
      />
    </div>
  );
}

export default ImgWrapper;
