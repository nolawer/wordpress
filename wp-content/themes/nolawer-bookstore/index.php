<?php get_header(); ?>

<!-- <div>
    <a href="<?= get_post_type_archive_link('book'); ?>">책 목록</a>
</div> -->


<?php

if (have_posts()) {
    while(have_posts()) {
        the_post();
        the_title();
        the_permalink();
    }
}

?>

<?php get_footer(); ?>