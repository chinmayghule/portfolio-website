import Image from "next/image";

function ImgWrapper() {
  return (
    <>
      <Image
        src="/profile-photo.jpg"
        alt="Picture of the developer"
        // width={192}
        // height={342}
        width={228}
        height={513}
        placeholder="blur"
        blurDataURL="/profile-photo-tiny.jpg"
        className="rounded-lg mx-auto block"
        priority={true}
      />
    </>
  );
}

export default ImgWrapper;
