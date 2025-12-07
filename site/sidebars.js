/**
 * Creating a sidebar enables you to:
 - Create an ordered group of docs
 - Render a sidebar for each doc of that group
 - Manually specify the order of documents in the sidebar
 */

const sidebars = {
  tutorialSidebar: [
    'overview',
    'learning-outcomes',
    'why-physical-ai-matters',
    'weekly-breakdown',
    {
      type: 'category',
      label: 'Modules',
      items: [
        'module-1-ros2',
        'module-2-gazebo-unity',
        'module-3-isaac',
        'module-4-vla',
      ],
    },
    'capstone-project',
    'hardware-requirements',
    'lab-architecture',
    'budget-options',
    'student-kit',
  ],
};

export default sidebars;
