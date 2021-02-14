import React from 'react'


const SupportInfo = () => {

  const renderOrganization = (name, link, summary) => (
    <li>
      <div>
        <a target="_blank" href={link}>{name}</a>
        <p>{summary}</p>
      </div>
    </li>
  );
  


  return (
    <div>
      <ul>
        {renderOrganization("Organization", "https://www.w3schools.com", "About Section")}
        {renderOrganization("Organization", "https://www.w3schools.com", "About Section")}
        {renderOrganization("Organization", "https://www.w3schools.com", "About Section")}
      </ul>
    </div>
  )
}

export default SupportInfo