import Business from "@/src/components/Home/Business";
import ContactForm from "@/src/components/Home/Contact/Form";
import Features from "@/src/components/Home/Features/indes";
import Hero from "@/src/components/Home/Hero";
import Payment from "@/src/components/Home/Payment";
import People from "@/src/components/Home/People";

export default function Home(){
  return(
    <main>
      <Hero />
      <People />
      <Features />
      <Business />
      <Payment />
      <ContactForm />
    </main>
  )
}