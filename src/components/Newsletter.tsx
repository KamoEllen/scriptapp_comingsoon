import { Button } from "./ui/button";
import { NameInput, EmailInput } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Submitted!");
    // Handle form submission logic here
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold">
          Join Our {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            WaitList
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
          Be the first to know when we launch.
        </p>

        <div className="flex justify-center">
          <form
            className="flex flex-col items-center w-full md:w-6/12 lg:w-4/12 gap-4 md:gap-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row md:gap-8 ">
              <div className="w-full md:w-1/2">
                <NameInput
                  placeholder="Your Name" //center this text in the name input field
                  className="bg-muted/50 dark:bg-muted/80"
                  aria-label="name"
                />
              </div>
              <div className="w-full md:w-1/2 ">
                <EmailInput
                  placeholder="Your Email" //center this text in the email input field
                  className="bg-muted/50 dark:bg-muted/80"
                  aria-label="email"
                />
              </div>
            </div>
            <Button type="submit" className="mt-4">Subscribe</Button>
          </form>
        </div>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
