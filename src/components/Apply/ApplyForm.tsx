import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface IApplyFormProps {
  name: string;
}

const ApplyForm = (props: IApplyFormProps) => {
  const { name } = props;
  const [files, setFiles] = useState([]);
  const [isMsg, setMsg] = useState(['']);

  const maxLength = 5000000;

  // tslint:disable-next-line: no-any
  function nameLengthValidator(file: any) {
    if (file.size > maxLength) {
      setMsg(['Size is larger than 5Mb']);
      setFiles([]);
    } else {
      setMsg(['']);
    }
    return null;
  }

  const { getRootProps, getInputProps } = useDropzone({
    // accept: 'application/msword, application/pdf',
    maxFiles: 1,
    validator: nameLengthValidator,
    // tslint:disable-next-line: no-shadowed-variable tslint:disable-next-line: no-any
    onDrop: (acceptedFiles: any) => {
      setFiles(
        // tslint:disable-next-line: no-any
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  useEffect(() => {
    // tslint:disable-next-line: no-any
    files.forEach((file: any) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const errroMsg = isMsg.map((item: string, i) => <span key={i}>{item}</span>);

  console.log(errroMsg);

  // tslint:disable-next-line: no-any
  const acceptedFileItems = files.map((file: any) => (
    <div key={file.path}>
      {file.path} - {file.size} bytes
    </div>
  ));

  return (
    <form className="w-full">
      <input type="hidden" name="position" value={name} />
      <p className="w-full text-sm font-medium mb-4">Applicant’s Information</p>
      <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-4 lg:gap-8">
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <input
            required
            type="text"
            name="first_name"
            placeholder="First name*"
            className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
          />
          <p className="w-full text-customColors-500 text-xs hidden">error message</p>
        </div>
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <input
            required
            type="text"
            name="last_name"
            placeholder="Last name*"
            className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
          />
          <p className="w-full text-customColors-500 text-xs hidden">error message</p>
        </div>

        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <input
            required
            type="email"
            name="email"
            placeholder="Email*"
            className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
          />
          <p className="w-full text-customColors-500 text-xs hidden">error message</p>
        </div>
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
          />
          <p className="w-full text-customColors-500 text-xs hidden">error message</p>
        </div>
      </div>
      <p className="w-full text-sm font-medium mt-8 mb-4">Applicant’s Documents</p>
      <div className="w-full grid xs:grid-cols-1 lg:grid-cols-2 xs:gap-4 lg:gap-8">
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <label className="text-sm">Resume</label>
          <div
            className="cursor-pointer w-full py-7 border border-dashed border-customColors-400 rounded-md mt-2 flex items-center justify-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            {acceptedFileItems.length > 0 ? (
              acceptedFileItems
            ) : (
              <p className="text-blue-400">Attach, Dropbox</p>
            )}
          </div>
          {/* @ts-ignore */}
          <p className={`w-full text-customColors-500 text-xs${isMsg !== '' ? '' : ' hidden'}`}>
            {errroMsg}
          </p>
        </div>
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <label className="text-sm">Website/ Portfolio/ Git link</label>
          <input
            required
            type="url"
            name="url"
            placeholder="type/paste here"
            className="form-input border-0 rounded-none text-base w-full border-b border-customColors-100 text-primary focus:border-black focus:outline-none px-0 py-1 text-light tracking-wide relative"
          />
          <p className="w-full text-customColors-500 text-xs hidden">error message</p>
        </div>
        <div className="w-full flex items-start content-start justify-start flex-wrap relative">
          <button
            disabled={isMsg.length > 0 ? true : false}
            type="submit"
            className="flex items-center justify-center border border-customColors-500 text-customColors-500 px-4 py-1 rounded-sm transform transition-all duration-300 hover:bg-customColors-500 hover:text-white cs-readmore text-base"
          >
            Submit application
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
