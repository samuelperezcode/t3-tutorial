import { url } from "inspector";
import { db } from "~/server/db";

const mockUrls = [
  'https://utfs.io/f/cace3015-eac1-4460-8b11-b7a89d4331f3-4z956w.jpg',
  'https://utfs.io/f/172f990b-0585-4b07-a789-0e740c6997d4-mifluj.jpg',
  'https://utfs.io/f/b58e9f95-7fa2-44a8-8e71-70c1b61f89a4-a9rfyr.jpg',
  'https://utfs.io/f/40f28f2c-7a33-4fee-ad5f-5d6aef7d7e7d-uj96a0.jpg'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const post = await db.query.posts.findMany()

  console.log(post);
  
  return (
    <main className="">
      <section className="flex flex-wrap">
        {
          mockImages.map(image => (
            <div key={image.id} className="w-1/4 p-4">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </section>
    </main>
  );
}
