export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path = '') => `${BASE}/${path.replace(/^\//, '')}`;

export const LINKS = {
  github: 'https://github.com/josefloresdesign/space-ds',
  figma: 'https://www.figma.com/community/file/1335673212969292007/space-ds',
  raw: 'https://raw.githubusercontent.com/josefloresdesign/space-ds/main',
  llms: 'https://josefloresdesign.github.io/space-ds/llms.txt',
  linkedin: 'https://www.linkedin.com/in/josefloresdesign/',
  issues: 'https://github.com/josefloresdesign/space-ds/issues',
  cdnCss: 'https://cdn.jsdelivr.net/gh/josefloresdesign/space-ds/css/styles.min.css',
  cdnTheme: 'https://cdn.jsdelivr.net/gh/josefloresdesign/space-ds/tailwind/theme.css',
};

export const NAV = [
  { label: 'Docs', href: url('docs') },
  { label: 'Components', href: url('components') },
  { label: 'Get started', href: url('get-started') },
  { label: 'Pricing', href: url('pricing') },
  { label: 'Changelog', href: url('changelog') },
];

export const COMPONENTS = [
  { name: 'Avatar', slug: 'avatar', desc: 'A person or entity.', group: 'Data' },
  { name: 'Button', slug: 'button', desc: 'Triggers an action.', group: 'Actions' },
  { name: 'Checkbox', slug: 'checkbox', desc: 'One or more options.', group: 'Forms' },
  { name: 'Chip', slug: 'chip', desc: 'Filters, tags and values.', group: 'Data' },
  { name: 'Input', slug: 'input', desc: 'Single-line field.', group: 'Forms' },
  { name: 'Menu', slug: 'menu', desc: 'Floating list of actions.', group: 'Actions' },
  { name: 'Radio', slug: 'radio', desc: 'Exactly one option.', group: 'Forms' },
  { name: 'Snackbar', slug: 'snackbar', desc: 'Brief confirmation.', group: 'Feedback' },
  { name: 'Switch', slug: 'switch', desc: 'Turns a setting on or off.', group: 'Forms' },
  { name: 'Tabs', slug: 'tabs', desc: 'Switches between views.', group: 'Navigation' },
  { name: 'Text area', slug: 'text-area', desc: 'Multi-line field.', group: 'Forms' },
  { name: 'Tooltip', slug: 'tooltip', desc: 'Short explanation on hover.', group: 'Feedback' },
];

export const DOCS_NAV = [
  { title: 'Get started', items: [
    { label: 'Introduction', href: url('docs') },
    { label: 'Installation', href: url('get-started') },
    { label: 'Token reference', href: url('docs/tokens') },
  ]},
  { title: 'Foundations', items: [
    { label: 'Color', href: url('docs/foundations/color') },
    { label: 'Typography', href: url('docs/foundations/typography') },
    { label: 'Space and sizing', href: url('docs/foundations/space-and-sizing') },
    { label: 'Radius, shadow and effects', href: url('docs/foundations/radius-shadow-effects') },
    { label: 'Motion and layout', href: url('docs/foundations/motion-layout') },
  ]},
  { title: 'Components', items: COMPONENTS.map(c => ({ label: c.name, href: url(`docs/components/${c.slug}`) })) },
];
