import React from 'react';
import Link from 'next/link';

const QuestionBox = ({ Selected = '', Name = '', Icon = '', ULink = '', CommingSoon = false }) => {
  let strokeColor = '#182542';
  let textColor = '#566179';
  let bgColor = '#160F2D';
  let iconColor = '#3F495F';

  if (Selected === Name) {
    strokeColor = '#FFFFFF';
    textColor = '#FFFFFF';
    bgColor = '#664DFF';
    iconColor = '#FFFFFF';
  }

  const containerStyle = {
    paddingLeft: '20px',
    height: '52px',
    display: 'flex',
    alignItems: 'center',
  };

  const boxStyle = {
    width: '34px',
    height: '34px',
    backgroundColor: bgColor,
    borderRadius: '9px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: strokeColor,
    borderTopWidth: '2px',
  };

  return (
    <Link href={ULink}>
      <div style={containerStyle} className="w-full flex hover:text-gray-800 border-l-4 border-transparent hover:border-[#664DFF] pr-6">
        <div style={boxStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill={iconColor}
            className="w-5 h-5"
          >
            <path fillRule="evenodd" d={Icon} clipRule="evenodd" />
          </svg>
        </div>
        <p style={{ marginLeft: '10px', color: textColor }}>{Name}</p>
        {CommingSoon && (
          <div className=" w-[40px] float-right h-[25px] rounded-lg text-center bg-gviolet1 text-[11px] p-[4.5px] ml-auto"> Soon
          </div>
        )}
      </div>
    </Link>
  );
};

export default QuestionBox;
