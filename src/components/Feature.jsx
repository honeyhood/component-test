import React, { useState } from 'react';
import {
  BoltIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

const Feature = (props) => {
  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.description);
  const [icon, setIcon] = useState(props.icon);

  const renderIcon = (icon) => {
    if (icon == 'BoltIcon') {
      return <BoltIcon className="h-8 w-8" aria-hidden="true" />;
    } else if (icon == 'DevicePhoneMobileIcon') {
      return <DevicePhoneMobileIcon className="h-8 w-8" aria-hidden="true" />;
    } else if (icon == 'GlobeAltIcon') {
      return <GlobeAltIcon className="h-8 w-8" aria-hidden="true" />;
    } else if (icon == 'ScaleIcon') {
      return <ScaleIcon className="h-8 w-8" aria-hidden="true" />;
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleIconChange = (event) => {
    setIcon(event.target.value);
  };

  return (
    <div
      key={name}
      className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
        {renderIcon(icon)}
      </div>
      <div className="sm:min-w-0 sm:flex-1">
        <p className="text-lg font-semibold leading-8 text-gray-900">{name}</p>
        <p className="mt-2 text-base leading-7 text-gray-600">{description}</p>
        {props.isAdmin && (
          <div>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
              />
            </label>
            <br />
            <label>
              Icon:
              <input type="url" value={icon} onChange={handleIconChange} />
            </label>
            <br />
            <button onClick={props.saveChanges}>Save Changes</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
