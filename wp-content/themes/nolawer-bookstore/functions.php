<?php
function getHelloWorld() 
{
    
return '<h1>Hello world</h1>';

}

function nbs_register_post_type() {

    $labels = array(
		'name'                  => '책',
        'singular_name'         => '책',
		'menu_name'             => '책 관리',
		'name_admin_bar'        => '책',
		'add_new'               => '새 책 등록',
		'add_new_item'          => '새 책 등록',
		'new_item'              => '새 책',
		'edit_item'             => '책 수정',
		'view_item'             => '책 보기',
		'all_items'             => '모든 책',
		'search_items'          => '책 검색',
		'parent_item_colon'     => '상위 책:',
		'not_found'             => '등록된 책이 없습니다.',
		'not_found_in_trash'    => '휴지통에 책이 없습니다.',
		'featured_image'        => '책 표지 이미지',
		'set_featured_image'    => '책 표지 이미지 설정',
		'remove_featured_image' => '책 표지 이미지 삭제',
		'use_featured_image'    => '책 표지 이미지 사용',
		'archives'              => '책 아카이브',
		'insert_into_item'      => '책에 삽입',
		'uploaded_to_this_item' => '이 책에 업로드됨',
		'filter_items_list'     => '책 목록 필터링',
		'items_list_navigation' => '책 목록 탐색',
		'items_list'            => '책 목록',
	);

    $args = array(
        'labels' => $labels,
        'public' => true,
        'menu_position' => 3,
        'menu_icon' => 'dashicons-book',
		'has_archive' => true,

    );
    register_post_type('book', $args);
}

add_action('init', 'nbs_register_post_type');