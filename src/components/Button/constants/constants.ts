export const BUTTON_VARIANT_CLASSES = {
  primary:
    'bg-btn-bg text-text-white hover:bg-btn-bg-hover active:bg-btn-bg-click disabled:bg-btn-bg-disabled disabled:text-btn-text-disabled',
  secondary:
    'border-2 border-btn-bg text-text-green hover:border-btn-bg-hover active:border-btn-bg-click hover:text-btn-bg-hover active:text-btn-bg-click disabled:text-btn-text-disabled-secondary disabled:border-btn-text-disabled-secondary',
  link: 'underline text-text-white text-base/4 sm:text-xl/5 hover:text-btn-text-hover-secondary active:text-btn-text-click-secondary disabled:text-btn-text-disabled-secondary',
  icon: 'border-green text-green active:border-btn-bg-click hover:bg-btn-bg-hover active:bg-btn-bg-click hover:border-btn-bg-hover flex h-10 w-21 items-center justify-center rounded-sm border-2 bg-transparent p-0 hover:text-white active:text-white sm:p-0 disabled:text-btn-text-disabled-secondary disabled:border-btn-text-disabled-secondary disabled:pointer-events-none',
};
