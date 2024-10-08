<?php 

function theme_enqueue_assets() {
    wp_enqueue_style( 'main-style',get_stylesheet_uri( 'style.css') );

    wp_enqueue_style( 'custom-style' , get_template_directory_uri( '/css/custom-style.css' ));

    wp_enqueue_script( 'custom-script' , get_template_directory_uri(  ) . '/js/custom-script.js' );

}

add_action( 'wp_enqueue_scripts', 'theme_enqueue_assets' );