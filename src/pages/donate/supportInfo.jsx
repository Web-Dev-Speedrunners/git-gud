import React from 'react'

const SupportInfo = () => {

  const renderOrganization = (name, link, summary) => (
    <li>
      <div>
        <a target="_blank" rel="noreferrer" href={link}>{name}</a>
        <p>{summary}</p>
      </div>
    </li>
  );
  
  return (
    <div>
      <ul>
        {renderOrganization("Organization", "https://teamtrees.org/", "About Section")}
        {renderOrganization("Organization", "https://teamtrees.org/", "About Section")}
        {renderOrganization("Organization", "https://teamtrees.org/", "About Section")}
      </ul>
    </div>
  )
}

export default SupportInfo