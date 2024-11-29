import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  return (
    <section className="px-4 md:px-8 lg:px-16 2xl:px-64 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section: Text */}
        <div className="w-full lg:w-1/2 text-[#212529]">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Let&apos;s keep in touch.
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            We’re here to help. Whether you&apos;re a healthcare provider,
            patient, or a partner interested in learning more about Pi-Health,
            our team is ready to assist.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Whether you have a question about our services, need assistance, or
            just want to give feedback, we’re always ready to listen.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Reach out to us through the form, and we’ll get back to you as soon
            as possible.
          </p>

          {/* Contact Info */}
          <div className="mt-6">
            <p className="text-lg text-gray-600">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@pi-health.co.uk"
                className="text-blue-600 hover:underline"
              >
                info@pi-health.co.uk
              </a>
            </p>
            <p className="text-lg text-gray-600 mt-2">
              <strong>Phone:</strong> +44 20 7946 0958
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message here"
                className="mt-1"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
