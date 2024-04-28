import { db } from "~/server/db";

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id) 
  })
  
  return (
    <main className="">
      <section className="flex flex-wrap">
        {
          images.map(image => (
            <div key={image.id} className="w-1/4 p-4">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </section>
    </main>
  );
}
