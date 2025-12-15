export default function Newsletter() {
  return (
    <div className="flex flex-col px-3 py-4.5 gap-4.5 w-full rounded-md">
      <div className="flex flex-col gap-1.5 text-base">
        <h4 className="font-display font-medium text-primary">Newsletter</h4>
        <p className="text-secondary">
          Receive the latest post updates directly in your inbox ASAP.
        </p>
      </div>
      <form action="" className="flex flex-row gap-2 h-9">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="bg-foreground/30 border border-foreground text-secondary rounded-md px-3 py-1.5 w-full placeholder:text-base focus:outline-none"
        />
        <button className="bg-foreground/30 border border-foreground text-secondary rounded-md px-4 items-center justify-center w-full h-full cursor-pointer sm:w-fit">
          Subscribe
        </button>
      </form>
    </div>
  );
}

