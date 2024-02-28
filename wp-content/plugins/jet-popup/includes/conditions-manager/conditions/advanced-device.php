<?php
namespace Jet_Popup\Conditions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Device extends Base {

	/**
	 * Condition slug
	 *
	 * @return string
	 */
	public function get_id() {
		return 'device';
	}

	/**
	 * Condition label
	 *
	 * @return string
	 */
	public function get_label() {
		return __( 'Device', 'jet-popup' );
	}

	/**
	 * Condition group
	 *
	 * @return string
	 */
	public function get_group() {
		return 'advanced';
	}

	/**
	 * @return int
	 */
	public function get_priority() {
		return 100;
	}

	/**
	 * @return string
	 */
	public function get_body_structure() {
		return 'jet_page';
	}

	/**
	 * [get_control description]
	 * @return [type] [description]
	 */
	public function get_control() {
		return [
			'type'        => 'f-select',
			'placeholder' => __( 'Select device', 'jet-popup' ),
		];
	}

	/**
	 * [get_avaliable_options description]
	 * @return [type] [description]
	 */
	public function get_avaliable_options() {
		return [
			[
				'label' => __( 'Desktop', 'jet-popup' ),
				'value' => 'desktop',
			],
			[
				'label' => __( 'Tablet', 'jet-popup' ),
				'value' => 'tablet',
			],
			[
				'label' => __( 'Mobile', 'jet-popup' ),
				'value' => 'mobile',
			],
		];
	}

	/**
	 * [get_label_by_value description]
	 * @param  string $value [description]
	 * @return [type]        [description]
	 */
	public function get_label_by_value( $value = '' ) {

		$device_string = '';

		if ( ! empty( $value ) && is_array( $value ) ) {
			$device_string = implode( ', ', $value );
		}

		return $device_string;
	}

	/**
	 * Condition check callback
	 *
	 * @return bool
	 */
	public function check( $arg = '' ) {

		if ( empty( $arg ) ) {
			return false;
		}

		$mobile_detect = new \Mobile_Detect;

		if ( $mobile_detect->isTablet() ) {
			$curr_device = 'tablet';
		} elseif ( $mobile_detect->isMobile() ) {
			$curr_device = 'mobile';
		} else {
			$curr_device = 'desktop';
		}

		if ( in_array( $curr_device, $arg ) ) {
			return true;
		}

		return false;
	}

}
