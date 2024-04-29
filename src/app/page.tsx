import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ImageUploader } from "./_components/image-uploader";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()

  return (
    <section className="flex flex-wrap justify-center">
        {
          images.map(image => (
            <div key={image.id} className="flex flex-col p-4 size-48">
              <Image src={image.url} width={480} height={480} alt={image.name} />
            </div>
          ))
        }
      </section>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <h2 className="text-center font-semibold text-2xl">Please sign in above</h2>
      </SignedOut>
      <SignedIn>
        <ImageUploader />
        <Images />
      </SignedIn>
      
    </main>
  );
}
