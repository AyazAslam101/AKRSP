import React from "react";

const Button = (props: {
  open?: any;
  children?: any;
  setOpen?: any;
  navigation?: any;
}) => {
  const { setOpen, navigation, open } = props;
  return (
    <div className="xl:hidden block z-10">
      <button
      className="mt-6 mr-4"
        onClick={() => {
          setOpen(true);
        }}
      >
        {props.children}
      </button>
      {open && (
        <div className="relative -top-10 -right-1">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="absolute top-2 right-3 border-2"
          >
            Close
          </button>

          {navigation.main.map((item: any , key : any) => (
            <div key={key} className="px-5 py-2 bg-tertiary ">
              <a
                href={item.href}
                className="font-medium text-normal text-secondary p-5"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Button;
