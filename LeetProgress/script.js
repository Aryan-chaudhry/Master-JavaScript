function loadChartJs(callback) {
    if (window.Chart) return callback();
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = callback;
    document.head.appendChild(script);
}

const userInput = document.getElementById('user');
const btn = document.getElementById('fetchBtn');
const username = document.querySelector('.username h2');
const acceptanceRate = document.querySelector('.acceptance-rate');
const pointData = document.querySelector('.point-data');
const reputationData = document.querySelector('.reputation-data');
const rankingData = document.querySelector('.ranking-data');

const easySolved = document.querySelector('.easy-solved');
const easyTotal = document.querySelector('.easy-total');
const mediumSolved = document.querySelector('.medium-solved');
const mediumTotal = document.querySelector('.medium-total');
const hardSolved = document.querySelector('.hard-solved');
const hardTotal = document.querySelector('.hard-total');
const totalSolved = document.querySelector('.total-solved');
const totalQuestions = document.querySelector('.total-questions');
const imageDiv = document.querySelector('.image');

let pieChartInstance = null;
let chartInstance = null;

// Fetch LeetCode profile image using GraphQL API
async function fetchLeetCodeAvatar(username) {
    const query = {
        query: `
            query getUserProfile($username: String!) {
                matchedUser(username: $username) {
                    profile {
                        userAvatar
                    }
                }
            }
        `,
        variables: { username }
    };
    try {
        const res = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(query)
        });
        const json = await res.json();
        let avatar = json?.data?.matchedUser?.profile?.userAvatar;
        // If avatar is null or empty, use default
        if (!avatar) {
            return "https://assets.leetcode.com/users/leetcode/avatar_1633110791.png";
        }
        // If avatar starts with http, use as is; else prepend domain
        if (avatar.startsWith('http')) {
            return avatar;
        } else {
            return `https://leetcode.com${avatar}`;
        }
    } catch {
        // On error, use default avatar
        return "https://assets.leetcode.com/users/leetcode/avatar_1633110791.png";
    }
}

function updatePieChart(easy, medium, hard, total, solved) {
    loadChartJs(() => {
        const ctx = document.getElementById('pieChart').getContext('2d');
        const unsolved = Math.max(total - (easy + medium + hard), 0);
        const data = [easy, medium, hard, unsolved];
        const colors = [
            '#22c55e', // green for easy
            '#facc15', // yellow for medium
            '#ef4444', // red for hard
            '#e5e7eb'  // gray for unsolved
        ];
        if (pieChartInstance) pieChartInstance.destroy();
        pieChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Easy', 'Medium', 'Hard', 'Unsolved'],
                datasets: [{
                    data,
                    backgroundColor: colors,
                    borderWidth: 0,
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed;
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            },
            plugins: [{
                beforeDraw: function(chart) {
                    // White background for the chart area
                    const ctx = chart.ctx;
                    ctx.save();
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, chart.width, chart.height);
                    ctx.restore();
                }
            }]
        });

        // Draw center text using HTML overlay for perfect centering and no overlap
        const centerText = document.getElementById('pie-center-text');
        centerText.innerHTML = `
            <span class="main">${solved}</span>
            <span class="sub">/${total}</span>
            <span class="label">Solved</span>
        `;
    });
}

async function getUserData() {
    const setUsername = userInput.value.trim();
    if (setUsername === '') {
        alert('Please Enter Username');
        return;
    }
    username.textContent = '@' + setUsername;

    // Set default avatar while loading
    imageDiv.innerHTML = `<img src="https://assets.leetcode.com/users/leetcode/avatar_1633110791.png" alt="avatar" style="width:100%;height:100%;border-radius:50%;">`;

    // Fetch and set LeetCode avatar (await to ensure it loads)
    const avatarUrl = await fetchLeetCodeAvatar(setUsername);
    imageDiv.innerHTML = `<img src="${avatarUrl}" alt="avatar" style="width:100%;height:100%;border-radius:50%;">`;

    try {
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${setUsername}`);
        if (!response.ok) throw new Error(`Http error! status: ${response.status}`);
        const data = await response.json();

        if (data.status === 'success' || !data.error) {
            acceptanceRate.textContent = data.acceptanceRate ? `${data.acceptanceRate}%` : '0%';
            pointData.textContent = data.contributionPoints ?? '0';
            reputationData.textContent = data.reputation ?? '0';
            rankingData.textContent = data.ranking ?? '0';

            easySolved.textContent = data.easySolved ?? '0';
            easyTotal.textContent = '/' + (data.totalEasy ?? '0');
            mediumSolved.textContent = data.mediumSolved ?? '0';
            mediumTotal.textContent = '/' + (data.totalMedium ?? '0');
            hardSolved.textContent = data.hardSolved ?? '0';
            hardTotal.textContent = '/' + (data.totalHard ?? '0');
            totalSolved.textContent = data.totalSolved ?? '0';
            totalQuestions.textContent = '/' + (data.totalQuestions ?? '0');

            // Pie chart for solved problems
            updatePieChart(
                data.easySolved ?? 0,
                data.mediumSolved ?? 0,
                data.hardSolved ?? 0,
                data.totalQuestions ?? 0,
                data.totalSolved ?? 0
            );

            // Submission Calendar Chart
            if (data.submissionCalendar) {
                loadChartJs(() => renderSubmissionChart(data.submissionCalendar));
            }
        } else {
            username.textContent = "User not found";
            acceptanceRate.textContent = '0%';
            pointData.textContent = '0';
            reputationData.textContent = '0';
            rankingData.textContent = '0';
            easySolved.textContent = '0';
            easyTotal.textContent = '/0';
            mediumSolved.textContent = '0';
            mediumTotal.textContent = '/0';
            hardSolved.textContent = '0';
            hardTotal.textContent = '/0';
            totalSolved.textContent = '0';
            totalQuestions.textContent = '/0';
            if (pieChartInstance) pieChartInstance.destroy();
            if (chartInstance) chartInstance.destroy();
            document.getElementById('pie-center-text').innerHTML = `
                <span class="main">0</span>
                <span class="sub">/0</span>
                <span class="label">Solved</span>
            `;
            // Set default avatar if user not found
            imageDiv.innerHTML = `<img src="https://assets.leetcode.com/users/leetcode/avatar_1633110791.png" alt="avatar" style="width:100%;height:100%;border-radius:50%;">`;
        }
    } catch (error) {
        alert(`Error while fetching data: ${error}`);
    }
}



function renderSubmissionChart(submissionCalendar) {
    const ctx = document.getElementById('submissionChart').getContext('2d');
    const timestamps = Object.keys(submissionCalendar)
        .map(ts => Number(ts) * 1000)
        .sort((a, b) => a - b);
    const counts = timestamps.map(ts => submissionCalendar[(ts / 1000).toString()]);
    const labels = timestamps.map(ts => {
        const d = new Date(ts);
        return `${d.getMonth() + 1}/${d.getDate()}`;
    });

    if (chartInstance) chartInstance.destroy();

    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Submissions',
                data: counts,
                backgroundColor: 'rgba(34,197,94,0.7)', // green bars
                borderRadius: 6,
                maxBarThickness: 18,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Submission Calendar',
                    color: '#22c55e',
                    font: { size: 18, weight: 'bold' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#22c55e', font: { weight: 'bold' } },
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: '#22c55e', font: { weight: 'bold' } },
                    grid: { color: '#22c55e22' }
                }
            }
        }
    });
}

btn.addEventListener('click', getUserData);
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') getUserData();
});