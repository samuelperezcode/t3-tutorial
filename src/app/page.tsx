import { SignedIn, SignedOut } from "@clerk/nextjs";
import { ImageUploader } from "./_components/image-uploader";
import { getMyImages } from "~/server/queries";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await getMyImages()

  return (
    <section className="flex flex-wrap">
        {
          images.map(image => (
            <div key={image.id} className="w-1/4 p-4">
              <img src={image.url} alt="image" />
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
