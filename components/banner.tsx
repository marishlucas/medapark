export default function Banner() {
  return (
    <div className=" bg-orange-600 px-6 py-2.5 sm:pr-3.5 lg:pl-8">
      <div className=" flex items-center justify-between gap-x-6 max-w-screen-xl w-full mx-auto">
        <p className="text-sm leading-6 text-white">
          <a href="#">
            <strong className="font-semibold">+407012345667</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            email@email.com
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <button
          type="button"
          className=" flex-none text-white px-4 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <span>x</span>
        </button>
      </div>
    </div>
  );
}
