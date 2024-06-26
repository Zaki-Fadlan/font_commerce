import { MainCarousel } from "@/components/main-carousel";
import { GalleryNews } from "@/components/news-gallery";
import { Separator } from "@/components/ui/separator";

const NewsGallery = [
  {
    title: "React Rendezvous",
    datepost: "10-10-2024",
    cover:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas quas suscipit asperiores fugit numquam? Reprehenderit repudiandae illo, laborum voluptatum omnis, minus mollitia officia deserunt enim ipsum vero voluptatibus laboriosam debitis! Animi consequuntur, est aliquid cum iusto unde esse laborum nobis ex ab, beatae fuga? Mollitia tempora at amet voluptatum modi a hic accusamus nisi ut exercitationem pariatur similique consequuntur accusantium reprehenderit magni quis sint, quod impedit laudantium veniam, voluptatem numquam aliquam distinctio doloribus. Iure praesentium vel voluptate consequuntur numquam nulla ea dicta quia enim, ab saepe eaque! Eveniet sint quos non porro, architecto deleniti ducimus laboriosam itaque voluptates corporis quisquam quidem minus quam suscipit mollitia amet beatae officia culpa. Enim ipsa commodi cupiditate adipisci optio numquam velit, fugiat eos deleniti doloribus doloremque vitae aut soluta cum nam expedita, voluptatem nisi iure, minus accusantium excepturi pariatur eaque quod. Vel enim aspernatur possimus ut sint vitae sapiente unde aliquam, doloremque dolorum numquam laborum maiores quis explicabo sequi suscipit veritatis, nesciunt error officiis eaque sunt. Numquam blanditiis, impedit et aut delectus molestias possimus asperiores laudantium quisquam sint veniam est repudiandae eveniet. Amet tenetur facilis sint maiores? Veritatis earum voluptatem rerum sunt facere odit cumque, obcaecati mollitia vero aliquid iure accusamus laborum at!",
  },
  {
    title: "Async Awakenings",
    datepost: "10-10-2024",
    cover:
      "https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas quas suscipit asperiores fugit numquam? Reprehenderit repudiandae illo, laborum voluptatum omnis, minus mollitia officia deserunt enim ipsum vero voluptatibus laboriosam debitis! Animi consequuntur, est aliquid cum iusto unde esse laborum nobis ex ab, beatae fuga? Mollitia tempora at amet voluptatum modi a hic accusamus nisi ut exercitationem pariatur similique consequuntur accusantium reprehenderit magni quis sint, quod impedit laudantium veniam, voluptatem numquam aliquam distinctio doloribus. Iure praesentium vel voluptate consequuntur numquam nulla ea dicta quia enim, ab saepe eaque! Eveniet sint quos non porro, architecto deleniti ducimus laboriosam itaque voluptates corporis quisquam quidem minus quam suscipit mollitia amet beatae officia culpa. Enim ipsa commodi cupiditate adipisci optio numquam velit, fugiat eos deleniti doloribus doloremque vitae aut soluta cum nam expedita, voluptatem nisi iure, minus accusantium excepturi pariatur eaque quod. Vel enim aspernatur possimus ut sint vitae sapiente unde aliquam, doloremque dolorum numquam laborum maiores quis explicabo sequi suscipit veritatis, nesciunt error officiis eaque sunt. Numquam blanditiis, impedit et aut delectus molestias possimus asperiores laudantium quisquam sint veniam est repudiandae eveniet. Amet tenetur facilis sint maiores? Veritatis earum voluptatem rerum sunt facere odit cumque, obcaecati mollitia vero aliquid iure accusamus laborum at!",
  },
  {
    title: "The Art of Reusability",
    datepost: "10-10-2024",
    cover:
      "https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas quas suscipit asperiores fugit numquam? Reprehenderit repudiandae illo, laborum voluptatum omnis, minus mollitia officia deserunt enim ipsum vero voluptatibus laboriosam debitis! Animi consequuntur, est aliquid cum iusto unde esse laborum nobis ex ab, beatae fuga? Mollitia tempora at amet voluptatum modi a hic accusamus nisi ut exercitationem pariatur similique consequuntur accusantium reprehenderit magni quis sint, quod impedit laudantium veniam, voluptatem numquam aliquam distinctio doloribus. Iure praesentium vel voluptate consequuntur numquam nulla ea dicta quia enim, ab saepe eaque! Eveniet sint quos non porro, architecto deleniti ducimus laboriosam itaque voluptates corporis quisquam quidem minus quam suscipit mollitia amet beatae officia culpa. Enim ipsa commodi cupiditate adipisci optio numquam velit, fugiat eos deleniti doloribus doloremque vitae aut soluta cum nam expedita, voluptatem nisi iure, minus accusantium excepturi pariatur eaque quod. Vel enim aspernatur possimus ut sint vitae sapiente unde aliquam, doloremque dolorum numquam laborum maiores quis explicabo sequi suscipit veritatis, nesciunt error officiis eaque sunt. Numquam blanditiis, impedit et aut delectus molestias possimus asperiores laudantium quisquam sint veniam est repudiandae eveniet. Amet tenetur facilis sint maiores? Veritatis earum voluptatem rerum sunt facere odit cumque, obcaecati mollitia vero aliquid iure accusamus laborum at!",
  },
  {
    title: "Stateful Symphony",
    datepost: "10-10-2024",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas quas suscipit asperiores fugit numquam? Reprehenderit repudiandae illo, laborum voluptatum omnis, minus mollitia officia deserunt enim ipsum vero voluptatibus laboriosam debitis! Animi consequuntur, est aliquid cum iusto unde esse laborum nobis ex ab, beatae fuga? Mollitia tempora at amet voluptatum modi a hic accusamus nisi ut exercitationem pariatur similique consequuntur accusantium reprehenderit magni quis sint, quod impedit laudantium veniam, voluptatem numquam aliquam distinctio doloribus. Iure praesentium vel voluptate consequuntur numquam nulla ea dicta quia enim, ab saepe eaque! Eveniet sint quos non porro, architecto deleniti ducimus laboriosam itaque voluptates corporis quisquam quidem minus quam suscipit mollitia amet beatae officia culpa. Enim ipsa commodi cupiditate adipisci optio numquam velit, fugiat eos deleniti doloribus doloremque vitae aut soluta cum nam expedita, voluptatem nisi iure, minus accusantium excepturi pariatur eaque quod. Vel enim aspernatur possimus ut sint vitae sapiente unde aliquam, doloremque dolorum numquam laborum maiores quis explicabo sequi suscipit veritatis, nesciunt error officiis eaque sunt. Numquam blanditiis, impedit et aut delectus molestias possimus asperiores laudantium quisquam sint veniam est repudiandae eveniet. Amet tenetur facilis sint maiores? Veritatis earum voluptatem rerum sunt facere odit cumque, obcaecati mollitia vero aliquid iure accusamus laborum at!",
  },
  {
    title: "Stateful Symphony",
    datepost: "10-10-2024",
    cover:
      "https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas quas suscipit asperiores fugit numquam? Reprehenderit repudiandae illo, laborum voluptatum omnis, minus mollitia officia deserunt enim ipsum vero voluptatibus laboriosam debitis! Animi consequuntur, est aliquid cum iusto unde esse laborum nobis ex ab, beatae fuga? Mollitia tempora at amet voluptatum modi a hic accusamus nisi ut exercitationem pariatur similique consequuntur accusantium reprehenderit magni quis sint, quod impedit laudantium veniam, voluptatem numquam aliquam distinctio doloribus. Iure praesentium vel voluptate consequuntur numquam nulla ea dicta quia enim, ab saepe eaque! Eveniet sint quos non porro, architecto deleniti ducimus laboriosam itaque voluptates corporis quisquam quidem minus quam suscipit mollitia amet beatae officia culpa. Enim ipsa commodi cupiditate adipisci optio numquam velit, fugiat eos deleniti doloribus doloremque vitae aut soluta cum nam expedita, voluptatem nisi iure, minus accusantium excepturi pariatur eaque quod. Vel enim aspernatur possimus ut sint vitae sapiente unde aliquam, doloremque dolorum numquam laborum maiores quis explicabo sequi suscipit veritatis, nesciunt error officiis eaque sunt. Numquam blanditiis, impedit et aut delectus molestias possimus asperiores laudantium quisquam sint veniam est repudiandae eveniet. Amet tenetur facilis sint maiores? Veritatis earum voluptatem rerum sunt facere odit cumque, obcaecati mollitia vero aliquid iure accusamus laborum at!",
  },
];

export default function Home() {
  const limitedNewsGallery = NewsGallery.slice(0, 4);

  return (
    <div className="animate-appearance-in">
      <MainCarousel />
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl hover:underline font-semibold tracking-tight">
            News & Articles
          </h2>
          <p className="text-sm text-muted-foreground">Top picks for you.</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex w-full flex-col space-y-4 justify-center items-center">
        {limitedNewsGallery.map((news) => (
          <GalleryNews key={news.title} gallery={news} aspectRatio="portrait" />
        ))}
        {NewsGallery.length > 4 && (
          <p className="text-sm mt-7 hover:underline font-medium text-muted-foreground">
            Other News or Articles
          </p>
        )}
      </div>
    </div>
  );
}
