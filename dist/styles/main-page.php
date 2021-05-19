<?php
/*
Template Name: Home page
*/
?>
<?php get_header('shop') ?>

<main class="main container">

    <section class="main__slider">
        <div class="main__header">
            <?php the_content(); ?>
        </div>
        <div class="main__slider-js">
            <?php $slider_home = carbon_get_post_meta($post->ID, 'crb_main_slider');
            foreach ($slider_home as $item) :
            ?>
                <div class="main__slider-item">
                    <div class="main__slider-item--top">
                        <?= wpautop($item['text_1']) ?>
                    </div>
                    <picture class="img">
                        <source type="image/png" srcset="<?= wp_get_attachment_image_url($item['photo'], 'full') ?>">
                        <img src="<?= wp_get_attachment_image_url($item['photo'], 'full') ?>" alt="img">
                    </picture>
                    <div class="main__slider-item--bottom">
                        <?= wpautop($item['text_2']) ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </section>
    <section class="main__bottom-about">
        <ul>
            <?php $icons = carbon_get_post_meta($post->ID, 'crb_main_icons');
            foreach ($icons as $icon) :
            ?>
                <li>
                    <span class="icon">
                        <img src="<?= wp_get_attachment_image_url($icon['img'], 'full') ?>" alt="icon">
                    </span>
                    <span class="text"><?= $icon['txt'] ?></span>
                </li>
            <?php endforeach; ?>
        </ul>
    </section>
    <section class="main__firstpage">
        <div class="main__firstpage--left">
            <span class="head">Produkt-Kategorien</span>
            <ul class="category">
                <?php wp_nav_menu([
                    'theme_location' => 'home_menu',
                    'container'      => false,
                    'menu_class'     => '',
                    'items_wrap'     => '%3$s',
                    'depth'          => 0,
                    'walker'         => new FlesoMenu(),
                ]); ?>
            </ul>
        </div>
        <div class="main__firstpage--slider">
            <?php echo fleso_most_sold_products(); ?>
        </div>
        <div class="main__firstpage--products">
            <ul class="product__items">
                <?php $main_products = carbon_get_post_meta($post->ID, 'crb_main_product_association');
                foreach ($main_products as $item) :
                    $main_product = wc_get_product($item['id']);
                    $main_product_id = $main_product->get_id();
                ?>
                    <li class="product__item">
                        <?= do_shortcode('[ti_wishlists_addtowishlist product_id="' . $main_product_id . '"]') ?>
                        <a href="<?= get_permalink($main_product_id) ?>">
                            <div class="product__item-img">
                                <picture class="img">
                                    <img src="<?= wp_get_attachment_image_url($main_product->get_image_id(), 'full') ?>" alt="product__item">
                                </picture>
                                <?php if ($main_product->get_sale_price()) : ?>
                                    <div class="discount"><span>
                                            <?= ceil(100 - (($main_product->get_sale_price() / $main_product->get_regular_price()) * 100)) ?>%
                                            Rabatt</span></div>
                                <?php endif; ?>
                                <?php if (carbon_get_post_meta($main_product_id, 'crb_show_product_abverkauf')) : ?>
                                    <div class="sale"><span>Abverkauf</span></div>
                                <?php endif; ?>
                            </div>
                            <div class="product__item-name">
                                <h3><?= $main_product->get_name() ?></h3>
                            </div>
                            <div class="product__item-description">
                                <?= wpautop(wp_trim_words($main_product->get_short_description(), 8, '...')); ?>
                            </div>
                            <div class="product__item-price">
                                <?php if ($main_product->get_stock_quantity() <= 3) : ?>
                                    <span class="min_quantity">Noch <?= $main_product->get_stock_quantity() ?> Stk. auf Lager</span>
                                <?php endif; ?>
                                <?php if ($f_price_html = $main_product->get_price_html()) : ?>
                                    <span class="price"><?php echo $f_price_html; ?></span>
                                <?php endif; ?>
                                <?php $rates = WC_Tax::get_rates(); ?>
                                <div class="wgm-info woocommerce-de_price_taxrate ">Enthält <?= $rates[1]['rate'] ?>% MwSt.</div>
                                <div class="wgm-info woocommerce_de_versandkosten">zzgl. <a class="versandkosten" href="/versand__lieferung/" target="_blank">Versand</a></div>
                                <span class="product__item-btn">
                                    <a href="<?= get_permalink($main_product_id) ?>" data-quantity="1" class="button product_type_variable add_to_cart_button" data-product_id="<?=
                                                                                                                                                                                $main_product_id ?>" data-product_sku="" aria-label="<?= $main_product->get_name() ?>" rel="nofollow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.764" height="17.568" viewBox="0 0 19.764 17.568">
                                            <path id="shopping-cart" d="M18.121,10.339,19.743,3.2a.824.824,0,0,0-.8-1.006H5.462L5.148.658A.822.822,0,0,0,4.341,0H.823A.824.824,0,0,0,0,.823v.549A.824.824,0,0,0,.823,2.2h2.4L5.632,13.98a1.922,1.922,0,1,0,2.3.294h7.193a1.921,1.921,0,1,0,2.182-.357l.189-.833a.823.823,0,0,0-.8-1.006H7.484l-.225-1.1H17.318a.824.824,0,0,0,.8-.641Z" fill="#fff" />
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </a>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>
    <section class="main__bottom">
        <div class="main__bottom-top">
            <?= wpautop(carbon_get_post_meta($post->ID, 'crb_main_text_bottom')) ?>
        </div>
        <div class="main__bottom-img">
            <picture class="left">
                <img src="<?= wp_get_attachment_image_url(carbon_get_post_meta($post->ID, 'crb_main_img_bottom'), 'full') ?>" alt="img">
            </picture>
            <div class="right">
                <?= wpautop(carbon_get_post_meta($post->ID, 'crb_main_text_2_bottom')) ?>
                <a href="<?= carbon_get_post_meta($post->ID, 'crb_main_link_bottom') ?>" class="button">
                    <?= carbon_get_post_meta($post->ID, 'crb_main_link_bottom_text') ?>
                    <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29.448" height="14.474" viewBox="0 0 29.448 14.474">
                            <path id="long-arrow-alt-right" d="M20.636,14.867H.789A.789.789,0,0,0,0,15.656v3.681a.789.789,0,0,0,.789.789H20.636v3.028a1.578,1.578,0,0,0,2.693,1.115l5.657-5.657a1.577,1.577,0,0,0,0-2.231l-5.657-5.657a1.578,1.578,0,0,0-2.693,1.115Z" transform="translate(0 -10.26)" fill="#fff" />
                        </svg>
                    </span>
                </a>
            </div>
        </div>
    </section>
</main>

<?php get_footer() ?>