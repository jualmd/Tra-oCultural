import { useState } from "react";

export const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className={`w-full ${className}`}>
      {children.map(child => 
        child.type.name === 'TabsList' 
          ? { ...child, props: { ...child.props, activeTab, setActiveTab } }
          : child.type.name === 'TabsContent' && child.props.value === activeTab
          ? child
          : null
      ).filter(Boolean)}
    </div>
  );
};

export const TabsList = ({ children, className = "", activeTab, setActiveTab }) => {
  return (
    <div className={`tabs-list ${className}`}>
      {children.map(child => ({
        ...child,
        props: { ...child.props, activeTab, setActiveTab }
      }))}
    </div>
  );
};

export const TabsTrigger = ({ value, children, className = "", activeTab, setActiveTab }) => {
  return (
    <button
      className={`tabs-trigger ${activeTab === value ? 'active' : ''} ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className = "" }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};