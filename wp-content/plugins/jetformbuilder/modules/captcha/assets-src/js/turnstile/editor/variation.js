const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'turnstile',
	title: __( 'Turnstile', 'jet-form-builder' ),
	isActive: ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	),
	description: __(
		`Set the Turnstile Captcha settings in the Captcha Container block 
to make user verification via WordPress form possible.`,
		'jet-form-builder',
	),
	icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M40.6149 37.2125C41.0498 37.5529 41.1264 38.1814 40.7861 38.6163L37.2322 43.1573C36.6656 43.8813 35.5869 43.9299 34.9576 43.2597L33.2696 41.4623C32.8915 41.0598 32.9114 40.4269 33.314 40.0488C33.7166 39.6708 34.3494 39.6906 34.7275 40.0932L36.0164 41.4657L39.211 37.3837C39.5514 36.9488 40.1799 36.8721 40.6149 37.2125Z"
			fill="currentColor"/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M46.5407 43H56.6089C58.8874 43 61.1208 41.7827 61.6499 39.5182C63.5363 31.4454 57.0428 22.976 48.5207 23.4547C46.5416 17.3331 40.672 13 33.9134 13C28.0351 13 22.8286 16.2782 20.2704 21.1603C15.1969 19.6577 9.9458 23.5648 9.66997 28.8454C4.89227 29.8298 1.64218 34.4522 2.03161 39.2536C2.22701 41.6627 4.58295 43 6.94884 43H27.4564C28.7306 47.0571 32.5209 50 36.9985 50C41.4762 50 45.2665 47.0571 46.5407 43ZM47.0924 25.5381C45.4986 19.5 40.5887 15 33.9134 15C28.0257 15 23.4986 18.5 21.2789 23.5448C14.9986 21.5 11.9986 24.5 11.5867 30.4925C6.99857 31 3.62854 34.203 4.02507 39.0919C4.13652 40.466 5.78252 41 6.94884 41H27.0479C27.0153 40.6711 26.9985 40.3375 26.9985 40C26.9985 34.4772 31.4757 30 36.9985 30C42.5214 30 46.9985 34.4772 46.9985 40C46.9985 40.3375 46.9818 40.6711 46.9492 41H56.6089C58.3083 41 59.4552 40.1211 59.7024 39.0631C61.4652 31.5192 54.8741 24.2771 47.0924 25.5381ZM36.9985 32C32.5803 32 28.9985 35.5817 28.9985 40C28.9985 44.4183 32.5803 48 36.9985 48C41.4168 48 44.9985 44.4183 44.9985 40C44.9985 35.5817 41.4168 32 36.9985 32Z"
		      fill="currentColor"/>
	</svg>,
	scope: [ 'block', 'inserter' ],
	attributes: {
		'provider': 'turnstile',
	},
};

export default variation;