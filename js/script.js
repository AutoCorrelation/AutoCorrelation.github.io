// 개인 홈페이지 JavaScript

// 검색 기능
function performSearch() {
    const query = document.getElementById('searchInput').value;
    if (query.trim()) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
}

// Enter 키로 검색
document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 반응형 그리드 조정
function adjustLayout() {
    const container = document.querySelector('.container');
    const width = window.innerWidth;

    if (width > 1200) {
        container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else if (width > 768) {
        container.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        container.style.gridTemplateColumns = '1fr';
    }
}

// 초기화
window.addEventListener('resize', adjustLayout);

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    adjustLayout();
    console.log('개인 홈페이지가 로드되었습니다! 🏠');
});
