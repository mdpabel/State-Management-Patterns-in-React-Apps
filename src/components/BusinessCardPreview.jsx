import { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';

const BusinessCardPreview = ({ form }) => {
  const ref = useRef();
  const { name, description, address, phone, avatar } = form;

  return (
    <div className="flex items-center flex-col">
      <h2 className="text-2xl text-center font-semibold mb-8">
        Business Card Preview
      </h2>
      <div className="shadow-md p-8 w-[500px] h-[200px]" ref={ref}>
        <div className="flex">
          <div
            className="w-32 h-32 rounded-full bg-gray-100 mr-6
    flex-shrink-0 overflow-hidden"
          >
            {avatar ? (
              <img
                src={avatar}
                className="h-full w-full object-cover"
                alt="Avatar"
              />
            ) : null}
          </div>
          <div className="flex flex-col flex-grow">
            <p className="font-semibold text-2xl mb-3">{name}</p>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex justify-between mt-auto">
              <p className="text-gray-500">{address}</p>
              <p className="text-gray-500">{phone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ReactToPdf targetRef={ref} filename={name}>
          {({ toPdf }) => (
            <button
              className="bg-gray-200 py-2 px-4 rounded-md"
              onClick={toPdf}
            >
              Download
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default BusinessCardPreview;
