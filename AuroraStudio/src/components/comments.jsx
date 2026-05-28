import SectionHeader from "./section-header";
import Carousel from "./carousel";
import Card from "./comment-card";

import commetsData from "../comments.js";

const headerData = {
  title: "Opinie",
  description: "Zaufało nam ponad 340 osób. Przeczytaj co o nas mówią.",
  upperdescription: "Co mówią klienci"
};

function Comments() {
  return (
    <section className="flex flex-col items-center gap-4 bg-bg-primary py-12 px-6 md:py-16">
      <SectionHeader title={headerData.title} description={headerData.description} upperdescription={headerData.upperdescription} />
     
      <Carousel 
        items={commetsData}      
        renderItem= {(comment) => 
        <Card 
        key={comment.id}
        id={comment.id} 
        name={comment.name} 
        comment={comment.comment} 
        rating={comment.rating} 
        product={comment.product}
        />}
      />
    </section>
  );
}

export default Comments;