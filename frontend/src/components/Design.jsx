function Design() {
  return (
    <div className="absolute right-0 top-0 grid grid-cols-4">
      <div className="size-30 bg-orange">
        <div className="size-full bg-red rounded-bl-full rounded-tr-full" />
      </div>
      <div className="size-30 bg-purple">
        <div className="size-full bg-red rounded-br-full rounded-tl-full" />
      </div>
      <div className="size-30 bg-radial from-red to-50% from-50% to-orange" />
      <div className="size-30 bg-purple" />
      <div />
      <div className="size-30 bg-red" />
      <div className="size-30 bg-linear-to-r from-purple to-50% from-50% to-red flex justify-center items-center">
        <div className="size-22 bg-linear-to-r from-orange to-50% from-50% to-purple rounded-full"></div>
      </div>
      <div className="size-30 bg-orange">
        <div className="size-full bg-red rounded-bl-full rounded-tr-full" />
      </div>
      <div className="col-span-2" />
      <div className="size-30 bg-orange flex justify-end">
        <div className="size-9 bg-purple rounded-bl-full"></div>
      </div>
      <div className="size-30 bg-radial from-orange from-15% to-15% to-red flex items-end">
        <div className="size-9 bg-purple rounded-tr-full"></div>
      </div>
      <div className="col-span-3" />
      <div className="flex justify-end">
        <div className="size-30 bg-orange">
          <div className="size-30 bg-purple rounded-br-4xl rounded-tl-full">
            <div className="absolute size-6 right-3 bottom-3 bg-red rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Design;
