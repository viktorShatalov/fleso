<?php

/**
 * The Template for displaying product archives, including the main shop page which is a post type archive
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.4.0
 */

defined('ABSPATH') || exit;

get_header('shop');

/**
 * Hook: woocommerce_before_main_content.
 *
 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
 * @hooked woocommerce_breadcrumb - 20
 * @hooked WC_Structured_Data::generate_website_data() - 30
 */
do_action('woocommerce_before_main_content');

?>
<div class="main__header">
    <h1>Bestellen sie ihre gewünschten Produkte
        <span>bequem in unserem online-shop</span>
    </h1>
    <p>
        Wenn es Rund um das Thema Raumgestaltung geht, bieten Ihnen die FleSo’s-Fachmärkte einen erstklassigen
        <span>Service für wenig Geld</span>. FleSo’s ist bekannt für seine Kundenberatung, den erstklassigen
        Service
        und seine <strong>Top-Qualität</strong>. Wenn es Rund um das Thema Raumgestaltung geht, bieten Ihnen
        die<br>
        FleSo’s-Fachmärkte einen erstklassigen Service für wenig Geld.
    </p>
</div>

<?php
remove_action('woocommerce_archive_description', 'woocommerce_taxonomy_archive_description', 10);
remove_action('woocommerce_archive_description', 'woocommerce_product_archive_description', 10);
/**
 * Hook: woocommerce_archive_description.
 *
 * @hooked woocommerce_taxonomy_archive_description - 10
 * @hooked woocommerce_product_archive_description - 10
 */
do_action('woocommerce_archive_description');
?>
<div class="main__content">

    <div class="main__content-top">
        <p>Unsere Top-Seller in der Kategorie InnenFarben</p>
        <div class="product__items slider-js">
            <?php $featured = wc_get_featured_product_ids();
            foreach ($featured as $item) :
                $f_product = wc_get_product($item);
            ?>
                <li class="product__item">
                    <?= do_shortcode('[ti_wishlists_addtowishlist product_id="' . $f_product->get_id() . '"]') ?>
                    <a href="<?= get_permalink($f_product->get_id()) ?>">
                        <div class="product__item-img">
                            <picture class="img">
                                <img src="<?= wp_get_attachment_image_url($f_product->get_image_id(), 'full') ?>" alt="product__item">
                            </picture>
                            <?php if ($f_product->get_sale_price()) : ?>
                                <div class="discount"><span>
                                        <?= 100 - (($f_product->get_sale_price() / $f_product->get_regular_price()) * 100) ?>% Rabatt</span></div>
                            <?php endif; ?>
                            <?php if (carbon_get_post_meta($f_product->get_id(), 'crb_show_product_abverkauf')) : ?>
                                <div class="sale"><span>Abverkauf</span></div>
                            <?php endif; ?>
                        </div>
                        <div class="product__item-name">
                            <h3><?= $f_product->get_name() ?></h3>
                        </div>
                        <div class="product__item-description">
                            <?= wpautop(wp_trim_words($f_product->get_short_description(), 8, '...')); ?>
                        </div>
                    </a>
                    <div class="product__item-price">
                        <?php if ($f_product->get_stock_quantity() <= 3) : ?>
                            <span class="min_quantity">Noch <?= $f_product->get_stock_quantity() ?> Stk. auf Lager</span>
                        <?php endif; ?>
                        <?php if ($f_price_html = $f_product->get_price_html()) : ?>
                            <span class="price"><?php echo $f_price_html; ?></span>
                        <?php endif; ?>
                        <?php $rates = WC_Tax::get_rates(); ?>
                        <div class="wgm-info woocommerce-de_price_taxrate ">Enthält <?= $rates[1]['rate'] ?>% MwSt.</div>
                        <div class="wgm-info woocommerce_de_versandkosten">zzgl. <a class="versandkosten" href="/versand__lieferung/" target="_blank">Versand</a></div>
                        <span class="product__item-btn">
                            <a href="<?= get_permalink($f_product->get_id()) ?>" data-quantity="1" class="button product_type_variable add_to_cart_button" data-product_id="<?=
                                                                                                                                                                                $f_product->get_id() ?>" data-product_sku="" aria-label="<?= $f_product->get_name() ?>" rel="nofollow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="19.764" height="17.568" viewBox="0 0 19.764 17.568">
                                    <path id="shopping-cart" d="M18.121,10.339,19.743,3.2a.824.824,0,0,0-.8-1.006H5.462L5.148.658A.822.822,0,0,0,4.341,0H.823A.824.824,0,0,0,0,.823v.549A.824.824,0,0,0,.823,2.2h2.4L5.632,13.98a1.922,1.922,0,1,0,2.3.294h7.193a1.921,1.921,0,1,0,2.182-.357l.189-.833a.823.823,0,0,0-.8-1.006H7.484l-.225-1.1H17.318a.824.824,0,0,0,.8-.641Z" fill="#fff" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </li>
            <?php endforeach; ?>
        </div>
    </div>
    <div class="sort__form">
        <?php woocommerce_catalog_ordering() ?>
    </div>
    <?php
    if (woocommerce_product_loop()) { ?>
        <?php
        remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);
        remove_action('woocommerce_before_shop_loop', 'woocommerce_output_all_notices', 10);
        remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
        /**
         * Hook: woocommerce_before_shop_loop.
         *
         * @hooked woocommerce_output_all_notices - 10
         * @hooked woocommerce_result_count - 20
         * @hooked woocommerce_catalog_ordering - 30
         */
        do_action('woocommerce_before_shop_loop'); ?>
    <?php
        woocommerce_product_loop_start();

        if (wc_get_loop_prop('total')) {
            while (have_posts()) {
                the_post();

                /**
                 * Hook: woocommerce_shop_loop.
                 */
                do_action('woocommerce_shop_loop');

                wc_get_template_part('content', 'product');
            }
        }

        woocommerce_product_loop_end();

        /**
         * Hook: woocommerce_after_shop_loop.
         *
         * @hooked woocommerce_pagination - 10
         */
        do_action('woocommerce_after_shop_loop');
    } else {
        /**
         * Hook: woocommerce_no_products_found.
         *
         * @hooked wc_no_products_found - 10
         */
        do_action('woocommerce_no_products_found');
    } ?>

</div>
<?php
/**
 * Hook: woocommerce_after_main_content.
 *
 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
 */
do_action('woocommerce_after_main_content');

/**
 * Hook: woocommerce_sidebar.
 *
 * @hooked woocommerce_get_sidebar - 10
 */
// do_action( 'woocommerce_sidebar' );

get_footer('shop');
