<div>
    <a href="<?= get_post_type_archive_link('book'); ?>">책 목록</a>
</div>


<?php

echo get_post_type_archive_link('book');

// var_dump($wp_query);

if (have_posts()) {
    while(have_posts()) {
        the_post();
        the_title();
        the_permalink();
    }
}