import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";
import { ImageUploader } from "./_components/image-uploader";

export const dynamic = 'force-dynamic'

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id) 
  })

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
