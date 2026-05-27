const sectorDefinitions = [
    { id: 2, name: 'Офисный Узел', type: 'work', workMoney: 100, workTime: 7, workEnergy: 15, workSkill: 0.08, studyCost: 70, studyTime: 5, studyEnergy: 11, studySkill: 0.35 },
    { id: 3, name: 'Учебный Центр', type: 'study', workMoney: 70, workTime: 5, workEnergy: 10, workSkill: 0.05, studyCost: 90, studyTime: 7, studyEnergy: 13, studySkill: 0.8 },
    { id: 4, name: 'Сервисный Парк', type: 'mixed', workMoney: 90, workTime: 6, workEnergy: 12, workSkill: 0.1, studyCost: 60, studyTime: 5, studyEnergy: 10, studySkill: 0.45 },
    { id: 5, name: 'Городской Коворкинг', type: 'network', workMoney: 85, workTime: 6, workEnergy: 11, workSkill: 0.07, studyCost: 55, studyTime: 4, studyEnergy: 8, studySkill: 0.3 },
    { id: 6, name: 'Площадь Роста', type: 'mixed', workMoney: 110, workTime: 7, workEnergy: 14, workSkill: 0.12, studyCost: 80, studyTime: 6, studyEnergy: 12, studySkill: 0.55 },
    { id: 7, name: 'Университет', type: 'study', workMoney: 80, workTime: 6, workEnergy: 13, workSkill: 0.06, studyCost: 120, studyTime: 9, studyEnergy: 18, studySkill: 1.1 },
    { id: 8, name: 'Бизнес-Инкубатор', type: 'mixed', workMoney: 130, workTime: 8, workEnergy: 17, workSkill: 0.14, studyCost: 95, studyTime: 7, studyEnergy: 13, studySkill: 0.65, minSkillForWork: 2.8 },
    { id: 9, name: 'Продажи', type: 'work', workMoney: 135, workTime: 9, workEnergy: 21, workSkill: 0.09, studyCost: 75, studyTime: 6, studyEnergy: 11, studySkill: 0.4 },
    { id: 10, name: 'Онлайн Курсы', type: 'study', workMoney: 65, workTime: 5, workEnergy: 10, workSkill: 0.03, studyCost: 40, studyTime: 4, studyEnergy: 8, studySkill: 0.5 },
    { id: 11, name: 'Стажировка', type: 'mixed', workMoney: 85, workTime: 7, workEnergy: 14, workSkill: 0.2, studyCost: 60, studyTime: 6, studyEnergy: 12, studySkill: 0.7 },
    { id: 12, name: 'Финансовая Школа', type: 'study', workMoney: 70, workTime: 5, workEnergy: 10, workSkill: 0.06, studyCost: 105, studyTime: 8, studyEnergy: 14, studySkill: 0.95 },
    { id: 13, name: 'Партнерская Сеть', type: 'network', workMoney: 110, workTime: 7, workEnergy: 16, workSkill: 0.12, studyCost: 80, studyTime: 6, studyEnergy: 12, studySkill: 0.55 },
    { id: 14, name: 'Проектная Лаба', type: 'mixed', workMoney: 125, workTime: 8, workEnergy: 18, workSkill: 0.18, studyCost: 100, studyTime: 7, studyEnergy: 13, studySkill: 0.8, minSkillForWork: 3.4 },
    { id: 15, name: 'Карьерный Форум', type: 'network', workMoney: 95, workTime: 6, workEnergy: 13, workSkill: 0.11, studyCost: 55, studyTime: 5, studyEnergy: 9, studySkill: 0.45 },
    { id: 16, name: 'Сервисный Центр', type: 'work', workMoney: 105, workTime: 8, workEnergy: 17, workSkill: 0.08, studyCost: 75, studyTime: 6, studyEnergy: 11, studySkill: 0.4 },
    { id: 17, name: 'Data Academy', type: 'study', workMoney: 78, workTime: 5, workEnergy: 11, workSkill: 0.07, studyCost: 115, studyTime: 8, studyEnergy: 15, studySkill: 1.0 },
    { id: 18, name: 'Стартап Хаб', type: 'mixed', workMoney: 145, workTime: 9, workEnergy: 21, workSkill: 0.2, studyCost: 120, studyTime: 8, studyEnergy: 15, studySkill: 0.85, minSkillForWork: 4.2 },
    { id: 19, name: 'Нетворкинг Кафе', type: 'network', workMoney: 88, workTime: 6, workEnergy: 12, workSkill: 0.1, studyCost: 45, studyTime: 4, studyEnergy: 8, studySkill: 0.35 },
    { id: 20, name: 'Гос. Портал Вакансий', type: 'work', workMoney: 115, workTime: 8, workEnergy: 16, workSkill: 0.1, studyCost: 50, studyTime: 5, studyEnergy: 9, studySkill: 0.3 },
    { id: 21, name: 'MBA Центр', type: 'study', workMoney: 95, workTime: 6, workEnergy: 12, workSkill: 0.08, studyCost: 150, studyTime: 10, studyEnergy: 19, studySkill: 1.2 },
    { id: 22, name: 'Медиа Агентство', type: 'mixed', workMoney: 128, workTime: 8, workEnergy: 17, workSkill: 0.13, studyCost: 85, studyTime: 6, studyEnergy: 12, studySkill: 0.55 },
    { id: 23, name: 'Soft Skills Hub', type: 'study', workMoney: 72, workTime: 5, workEnergy: 10, workSkill: 0.05, studyCost: 65, studyTime: 6, studyEnergy: 11, studySkill: 0.7 },
    { id: 24, name: 'HR Центр', type: 'work', workMoney: 118, workTime: 8, workEnergy: 16, workSkill: 0.09, studyCost: 70, studyTime: 5, studyEnergy: 10, studySkill: 0.42, minSkillForWork: 2.0 },
    { id: 48, name: 'Аналитический Отдел', type: 'work', workMoney: 108, workTime: 8, workEnergy: 16, workSkill: 0.1, studyCost: 75, studyTime: 6, studyEnergy: 11, studySkill: 0.45 },
    { id: 26, name: 'Код-Лаборатория', type: 'study', workMoney: 82, workTime: 6, workEnergy: 12, workSkill: 0.08, studyCost: 125, studyTime: 8, studyEnergy: 15, studySkill: 1.05 },
    { id: 27, name: 'Маркетинг Хаб', type: 'mixed', workMoney: 122, workTime: 8, workEnergy: 17, workSkill: 0.14, studyCost: 90, studyTime: 6, studyEnergy: 12, studySkill: 0.6 },
    { id: 28, name: 'Биржа Проектов', type: 'network', workMoney: 102, workTime: 7, workEnergy: 15, workSkill: 0.1, studyCost: 65, studyTime: 5, studyEnergy: 9, studySkill: 0.45 },
    { id: 29, name: 'Технопарк', type: 'mixed', workMoney: 138, workTime: 9, workEnergy: 20, workSkill: 0.17, studyCost: 105, studyTime: 7, studyEnergy: 14, studySkill: 0.75, minSkillForWork: 2.6 },
    { id: 30, name: 'Школа Переговоров', type: 'study', workMoney: 74, workTime: 5, workEnergy: 10, workSkill: 0.05, studyCost: 70, studyTime: 6, studyEnergy: 11, studySkill: 0.72 },
    { id: 31, name: 'Логистический Центр', type: 'work', workMoney: 112, workTime: 8, workEnergy: 17, workSkill: 0.09, studyCost: 60, studyTime: 5, studyEnergy: 10, studySkill: 0.35 },
    { id: 32, name: 'Дизайн Студия', type: 'mixed', workMoney: 116, workTime: 7, workEnergy: 15, workSkill: 0.13, studyCost: 85, studyTime: 6, studyEnergy: 12, studySkill: 0.62 },
    { id: 33, name: 'Клуб Менторов', type: 'network', workMoney: 92, workTime: 6, workEnergy: 12, workSkill: 0.11, studyCost: 58, studyTime: 5, studyEnergy: 9, studySkill: 0.5 },
    { id: 34, name: 'Продуктовая Команда', type: 'mixed', workMoney: 142, workTime: 9, workEnergy: 21, workSkill: 0.19, studyCost: 115, studyTime: 8, studyEnergy: 15, studySkill: 0.82, minSkillForWork: 3.1 },
    { id: 35, name: 'Центр Сертификации', type: 'study', workMoney: 86, workTime: 6, workEnergy: 12, workSkill: 0.07, studyCost: 140, studyTime: 9, studyEnergy: 17, studySkill: 1.15 },
    { id: 36, name: 'Фриланс Биржа', type: 'work', workMoney: 126, workTime: 8, workEnergy: 18, workSkill: 0.12, studyCost: 55, studyTime: 5, studyEnergy: 9, studySkill: 0.38 },
    { id: 37, name: 'Исследовательский Центр', type: 'study', workMoney: 76, workTime: 5, workEnergy: 11, workSkill: 0.06, studyCost: 118, studyTime: 8, studyEnergy: 15, studySkill: 1.02 },
    { id: 38, name: 'Акселератор', type: 'mixed', workMoney: 150, workTime: 9, workEnergy: 22, workSkill: 0.21, studyCost: 130, studyTime: 8, studyEnergy: 16, studySkill: 0.9, minSkillForWork: 4.0 },
    { id: 39, name: 'Отдел Поддержки', type: 'work', workMoney: 98, workTime: 7, workEnergy: 15, workSkill: 0.08, studyCost: 62, studyTime: 5, studyEnergy: 9, studySkill: 0.36 },
    { id: 40, name: 'Публичные Выступления', type: 'study', workMoney: 80, workTime: 6, workEnergy: 12, workSkill: 0.06, studyCost: 88, studyTime: 7, studyEnergy: 13, studySkill: 0.86 },
    { id: 41, name: 'Партнерский Офис', type: 'network', workMoney: 118, workTime: 7, workEnergy: 16, workSkill: 0.13, studyCost: 82, studyTime: 6, studyEnergy: 11, studySkill: 0.58 },
    { id: 42, name: 'QA Полигон', type: 'mixed', workMoney: 120, workTime: 8, workEnergy: 17, workSkill: 0.15, studyCost: 95, studyTime: 7, studyEnergy: 13, studySkill: 0.78, minSkillForWork: 2.4 },
    { id: 43, name: 'Финтех Команда', type: 'work', workMoney: 148, workTime: 9, workEnergy: 22, workSkill: 0.16, studyCost: 110, studyTime: 7, studyEnergy: 14, studySkill: 0.68, minSkillForWork: 3.6 },
    { id: 44, name: 'Кампус Лидерства', type: 'study', workMoney: 84, workTime: 6, workEnergy: 12, workSkill: 0.07, studyCost: 100, studyTime: 8, studyEnergy: 14, studySkill: 0.98 },
    { id: 45, name: 'Консалтинг Бюро', type: 'mixed', workMoney: 136, workTime: 8, workEnergy: 19, workSkill: 0.18, studyCost: 108, studyTime: 7, studyEnergy: 13, studySkill: 0.74, minSkillForWork: 3.0 },
    { id: 46, name: 'Комьюнити Центр', type: 'network', workMoney: 90, workTime: 6, workEnergy: 12, workSkill: 0.1, studyCost: 50, studyTime: 4, studyEnergy: 8, studySkill: 0.42 },
    { id: 47, name: 'Корпоративная Академия', type: 'study', workMoney: 92, workTime: 6, workEnergy: 13, workSkill: 0.08, studyCost: 145, studyTime: 9, studyEnergy: 18, studySkill: 1.18 },
];

const MAP_CARD_COUNT = 23;
let playableSectorDefinitions = sectorDefinitions.slice(0, MAP_CARD_COUNT);
let FIRST_PLAYABLE_SECTOR_ID = playableSectorDefinitions[0]?.id ?? 1;

const mapElement = document.getElementById('cityMap');
const sectorInfoElement = document.getElementById('sectorInfo');
const eventLogElement = document.getElementById('eventLog');
const dayValue = document.getElementById('dayValue');
const moneyValue = document.getElementById('moneyValue');
const timeValue = document.getElementById('timeValue');
const energyValue = document.getElementById('energyValue');
const skillValue = document.getElementById('skillValue');
const careerValue = document.getElementById('careerValue');
const currentPlayerValue = document.getElementById('currentPlayerValue');
const dayStarterValue = document.getElementById('dayStarterValue');
const turnsLeftValue = document.getElementById('turnsLeftValue');
const moneyLeaderboard = document.getElementById('moneyLeaderboard');
const gameKeyValue = document.getElementById('gameKeyValue');
const leaveGameButton = document.getElementById('leaveGameButton');
const nextTurnButton = document.getElementById('nextTurnButton');
const buyTurnButton = document.getElementById('buyTurnButton');
const resetButton = document.getElementById('resetButton');
const turnTransitionOverlay = document.getElementById('turnTransitionOverlay');
const turnTransitionSector = document.getElementById('turnTransitionSector');

const MAP_SIZE = 5;
let turnTransitionInProgress = false;
let syncTimer = null;
let currentRoomKey = null;

const gameState = {
    day: 1,
    activePlayerIndex: 0,
    dayStarterIndex: 0,
    players: [],
};

function getPlayerName(player) {
    return player?.name || player?.username || '';
}

function hashString(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
        hash ^= value.charCodeAt(index);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function seededRandom(seed) {
    let state = seed || 1;
    return () => {
        state = Math.imul(state ^ (state >>> 15), 1 | state);
        state ^= state + Math.imul(state ^ (state >>> 7), 61 | state);
        return ((state ^ (state >>> 14)) >>> 0) / 4294967296;
    };
}

function shuffleWithSeed(items, seedText) {
    const random = seededRandom(hashString(seedText));
    const shuffledItems = [...items];
    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const targetIndex = Math.floor(random() * (index + 1));
        [shuffledItems[index], shuffledItems[targetIndex]] = [shuffledItems[targetIndex], shuffledItems[index]];
    }
    return shuffledItems;
}

function configurePlayableSectors(gameKey) {
    playableSectorDefinitions = shuffleWithSeed(sectorDefinitions, gameKey).slice(0, MAP_CARD_COUNT);
    FIRST_PLAYABLE_SECTOR_ID = playableSectorDefinitions[0]?.id ?? 1;
}

function normalizePlayer(player, index = 0) {
    return {
        id: player.id,
        name: getPlayerName(player),
        money: Number(player.money ?? 900),
        time: Number(player.time ?? 24),
        energy: Number(player.energy ?? 100),
        skill: Number(player.skill ?? 1),
        career: Number(player.career ?? 0),
        workedThisWeek: Number(player.workedThisWeek ?? 0),
        studiedThisWeek: Number(player.studiedThisWeek ?? 0),
        turnsLeft: Number(player.turnsLeft ?? 1),
        extraTurnPrice: Number(player.extraTurnPrice ?? 120),
        positionId: normalizeSectorId(Number(player.positionId ?? FIRST_PLAYABLE_SECTOR_ID)),
        _index: index,
    };
}

function serializePlayer(player) {
    return {
        id: player.id,
        name: player.name,
        money: player.money,
        time: player.time,
        energy: player.energy,
        skill: player.skill,
        career: player.career,
        workedThisWeek: player.workedThisWeek,
        studiedThisWeek: player.studiedThisWeek,
        turnsLeft: player.turnsLeft,
        extraTurnPrice: player.extraTurnPrice,
        positionId: player.positionId,
    };
}

function applyState(state) {
    gameState.day = Number(state.day ?? 1);
    gameState.activePlayerIndex = Number(state.activePlayerIndex ?? 0);
    gameState.players = (state.players || []).map((player, index) => normalizePlayer(player, index));
    if (gameState.activePlayerIndex >= gameState.players.length) {
        gameState.activePlayerIndex = 0;
    }
    gameState.dayStarterIndex = 0;
}

function statePayload() {
    return {
        day: gameState.day,
        activePlayerIndex: gameState.activePlayerIndex,
        dayStarterIndex: gameState.dayStarterIndex,
        players: gameState.players.map(serializePlayer),
    };
}

function getActivePlayer() {
    return gameState.players[gameState.activePlayerIndex] || null;
}

function getSectorById(id) {
    return playableSectorDefinitions.find((sector) => sector.id === id);
}

function normalizeSectorId(id) {
    return getSectorById(id) ? id : FIRST_PLAYABLE_SECTOR_ID;
}

function getSectorIndex(id) {
    return playableSectorDefinitions.findIndex((sector) => sector.id === id);
}

function getCurrentSector(player) {
    return player ? getSectorById(player.positionId) : null;
}

function getNextSectorId(currentId) {
    const currentIndex = getSectorIndex(currentId);
    if (currentIndex === -1) {
        return FIRST_PLAYABLE_SECTOR_ID;
    }
    return playableSectorDefinitions[(currentIndex + 1) % playableSectorDefinitions.length].id;
}

function getPrevSectorId(currentId) {
    const currentIndex = getSectorIndex(currentId);
    if (currentIndex === -1) {
        return FIRST_PLAYABLE_SECTOR_ID;
    }
    return playableSectorDefinitions[(currentIndex - 1 + playableSectorDefinitions.length) % playableSectorDefinitions.length].id;
}

function getUpSectorId(currentId) {
    const currentIndex = getSectorIndex(currentId);
    const upIndex = currentIndex - MAP_SIZE;
    return upIndex >= 0 ? playableSectorDefinitions[upIndex].id : null;
}

function getDownSectorId(currentId) {
    const currentIndex = getSectorIndex(currentId);
    const downIndex = currentIndex + MAP_SIZE;
    return downIndex < playableSectorDefinitions.length ? playableSectorDefinitions[downIndex].id : null;
}

function getDistanceBetweenSectors(fromId, toId) {
    const fromIndex = Math.max(0, getSectorIndex(fromId));
    const toIndex = Math.max(0, getSectorIndex(toId));
    const fromRow = Math.floor(fromIndex / MAP_SIZE);
    const fromCol = fromIndex % MAP_SIZE;
    const toRow = Math.floor(toIndex / MAP_SIZE);
    const toCol = toIndex % MAP_SIZE;
    return Math.max(1, Math.abs(fromRow - toRow) + Math.abs(fromCol - toCol));
}

function addLog(message, type = '') {
    const item = document.createElement('li');
    item.textContent = `День ${gameState.day}: ${message}`;
    if (type) {
        item.classList.add(type);
    }
    eventLogElement.prepend(item);
    while (eventLogElement.children.length > 12) {
        eventLogElement.removeChild(eventLogElement.lastChild);
    }
}

function predictWorkIncome(player, sector) {
    const skillFactor = 1 + player.skill * 0.15;
    const careerFactor = 1 + player.career * 0.06;
    return Math.round(sector.workMoney * skillFactor * careerFactor);
}

async function apiFetch(path, options = {}) {
    const response = await fetch(path, {
        headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
        ...options,
    });
    let data = null;
    try {
        data = await response.json();
    } catch (_) {
        data = null;
    }
    if (!response.ok) {
        const detail = data?.detail || 'request_failed';
        throw new Error(detail);
    }
    return data;
}

function renderMoneyLeaderboard() {
    moneyLeaderboard.innerHTML = '';
    if (!gameState.players.length) {
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="3">Пока нет подключенных игроков</td>';
        moneyLeaderboard.appendChild(row);
        return;
    }

    const sortedPlayers = [...gameState.players].sort((firstPlayer, secondPlayer) => {
        if (secondPlayer.money !== firstPlayer.money) {
            return secondPlayer.money - firstPlayer.money;
        }
        return firstPlayer._index - secondPlayer._index;
    });

    sortedPlayers.forEach((player, index) => {
        const row = document.createElement('tr');
        if (player._index === gameState.activePlayerIndex) {
            row.classList.add('active-player');
        }
        row.innerHTML = `
            <td>#${index + 1}</td>
            <td>${player.name}</td>
            <td>$${player.money}</td>
        `;
        moneyLeaderboard.appendChild(row);
    });
}

function renderMapState() {
    const activePlayer = getActivePlayer();
    document.querySelectorAll('.sector').forEach((element) => {
        const sectorId = Number(element.dataset.id);
        element.classList.remove('active', 'current-location', 'next-location', 'prev-location', 'up-location', 'down-location', 'foggy');

        if (!activePlayer) {
            return;
        }

        if (sectorId === activePlayer.positionId) {
            element.classList.add('current-location');
        } else {
            element.classList.add('foggy');
        }
        if (sectorId === getNextSectorId(activePlayer.positionId)) {
            element.classList.add('next-location');
        }
        if (sectorId === getPrevSectorId(activePlayer.positionId)) {
            element.classList.add('prev-location');
        }
        const upId = getUpSectorId(activePlayer.positionId);
        const downId = getDownSectorId(activePlayer.positionId);
        if (upId !== null && sectorId === upId) {
            element.classList.add('up-location');
        }
        if (downId !== null && sectorId === downId) {
            element.classList.add('down-location');
        }

        const markers = gameState.players
            .filter((player) => player.positionId === sectorId)
            .map((player) => `<span class="player-badge ${player.id === activePlayer.id ? 'is-active' : ''}"><strong>${player.name}</strong><small>$${player.money} | ходы ${player.turnsLeft}</small></span>`)
            .join('');

        let markerContainer = element.querySelector('.player-markers');
        if (!markerContainer) {
            markerContainer = document.createElement('div');
            markerContainer.className = 'player-markers';
            element.appendChild(markerContainer);
        }
        markerContainer.innerHTML = markers;
    });
}

function renderStats() {
    const player = getActivePlayer();
    if (!player) {
        dayValue.textContent = '0';
        moneyValue.textContent = '0';
        timeValue.textContent = '0';
        energyValue.textContent = '0';
        skillValue.textContent = '0';
        careerValue.textContent = '0';
        currentPlayerValue.textContent = '-';
        dayStarterValue.textContent = '-';
        turnsLeftValue.textContent = '0';
        buyTurnButton.textContent = '⭐ Купить ход';
        nextTurnButton.textContent = '➡️ Передать ход';
        renderMoneyLeaderboard();
        renderMapState();
        return;
    }

    dayValue.textContent = String(gameState.day);
    moneyValue.textContent = String(player.money);
    timeValue.textContent = String(player.time);
    energyValue.textContent = String(player.energy);
    skillValue.textContent = player.skill.toFixed(1);
    careerValue.textContent = String(player.career);
    currentPlayerValue.textContent = player.name;
    dayStarterValue.textContent = gameState.players[gameState.dayStarterIndex]?.name || '-';
    turnsLeftValue.textContent = String(player.turnsLeft);
    buyTurnButton.textContent = `⭐ Купить ход (${player.extraTurnPrice})`;
    nextTurnButton.textContent = '➡️ Передать ход';
    renderMoneyLeaderboard();
    renderMapState();
}

function renderSectorInfo() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!player || !sector) {
        sectorInfoElement.innerHTML = '<p>Здесь появится информация о месте, где сейчас находится активный игрок.</p>';
        return;
    }

    const workThreshold = Number(sector.minSkillForWork || 0);
    const isWorkLocked = player.skill < workThreshold;
    const thresholdText = workThreshold > 0
        ? `${workThreshold.toFixed(1)} (у вас ${player.skill.toFixed(1)})`
        : 'нет';

    sectorInfoElement.innerHTML = `
        <h4>${sector.name}</h4>
        <p>Игрок: <strong>${player.name}</strong></p>
        <div class="impact">
            <p>Работа: +${predictWorkIncome(player, sector)} денег</p>
            <p>Учеба: +${sector.studySkill} к навыку</p>
            <p>Время: ${sector.workTime}ч</p>
            <p>Энергия: -${Math.max(0, sector.workEnergy)}</p>
            <p class="${isWorkLocked ? 'locked-threshold' : ''}">Порог работы: ${thresholdText}</p>
        </div>
        <div class="action-buttons">
            <button
                id="workButton"
                class="invest-button action-work"
                type="button"
                ${isWorkLocked ? 'disabled title="Недостаточно квалификации для работы на этой клетке"' : ''}
            >💼 Работать</button>
            <button id="studyButton" class="invest-button action-study" type="button">📚 Учиться</button>
        </div>
    `;

    document.getElementById('workButton').addEventListener('click', doWork);
    document.getElementById('studyButton').addEventListener('click', doStudy);
}

function renderGameView() {
    renderStats();
    renderSectorInfo();
}

function renderTransitionSector(player) {
    const sector = getCurrentSector(player);
    if (!sector) {
        return;
    }
    const icons = { work: '💼', study: '📚', mixed: '🎯', network: '🤝' };
    const overlayText = turnTransitionOverlay.querySelector('.turn-transition-label');
    if (overlayText) {
        overlayText.textContent = `Игрок ${player.name} находится здесь`;
    }
    turnTransitionSector.className = `turn-transition-sector sector type-${sector.type}`;
    turnTransitionSector.innerHTML = `
        <span class="sector-icon">${icons[sector.type] || '📍'}</span>
        <span class="sector-name">${sector.name}</span>
        <span class="sector-meta">Игрок: ${player.name}</span>
    `;
}

function showTurnTransition(player, onDone) {
    if (!player || turnTransitionInProgress) {
        return;
    }
    turnTransitionInProgress = true;
    nextTurnButton.disabled = true;
    buyTurnButton.disabled = true;
    resetButton.disabled = true;

    renderTransitionSector(player);
    turnTransitionOverlay.classList.add('is-visible');
    turnTransitionOverlay.setAttribute('aria-hidden', 'false');

    window.setTimeout(() => {
        turnTransitionOverlay.classList.remove('is-visible');
        turnTransitionOverlay.setAttribute('aria-hidden', 'true');
        turnTransitionInProgress = false;
        nextTurnButton.disabled = false;
        buyTurnButton.disabled = false;
        resetButton.disabled = false;
        if (typeof onDone === 'function') {
            onDone();
        }
    }, 900);
}

async function saveRoomState() {
    if (!currentRoomKey) {
        return false;
    }
    await apiFetch('/api/games/state', {
        method: 'PUT',
        body: JSON.stringify({ game_key: currentRoomKey, state: statePayload() }),
    });
    return true;
}

async function syncRoomState() {
    if (!currentRoomKey) {
        return false;
    }
    const response = await fetch(`/api/games/${encodeURIComponent(currentRoomKey)}`);
    if (!response.ok) {
        return false;
    }
    const data = await response.json();
    if (!data.state) {
        return false;
    }
    applyState(data.state);
    return true;
}

function consumeTurn(player) {
    if (player.turnsLeft <= 0) {
        addLog(`${player.name}: нет доступных ходов. Передайте ход или купите новый.`, 'warning');
        return false;
    }
    player.turnsLeft -= 1;
    return true;
}

function autoPassTurnIfNoTime() {
    const player = getActivePlayer();
    if (player && player.time <= 0) {
        player.time = 0;
        addLog(`${player.name}: свободное время закончилось, ход передан автоматически.`, 'warning');
        nextPlayerTurn();
        return true;
    }
    return false;
}

function doWork() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!player || !sector) {
        return;
    }
    if (player.skill < (sector.minSkillForWork || 0)) {
        addLog(`${player.name}: для работы в "${sector.name}" нужна квалификация ${sector.minSkillForWork.toFixed(1)}.`, 'warning');
        renderSectorInfo();
        return;
    }
    if (!consumeTurn(player)) {
        return;
    }
    if (player.money < 0) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно денег.`, 'warning');
        return;
    }
    if (player.time < sector.workTime || player.energy < Math.max(0, sector.workEnergy)) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно ресурсов для работы в "${sector.name}".`, 'warning');
        return;
    }
    const income = predictWorkIncome(player, sector);
    player.money += income;
    player.time -= sector.workTime;
    player.energy = Math.max(0, Math.min(100, player.energy - sector.workEnergy));
    player.skill = Number((player.skill + sector.workSkill).toFixed(2));
    player.career += 1;
    player.workedThisWeek += 1;
    addLog(`${player.name} работает в "${sector.name}": +${income} денег.`, 'positive');
    saveRoomState().finally(renderGameView);
}

function doStudy() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!player || !sector) {
        return;
    }
    if (!consumeTurn(player)) {
        return;
    }
    if (player.money < sector.studyCost || player.time < sector.studyTime || player.energy < Math.max(0, sector.studyEnergy)) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно ресурсов для учебы в "${sector.name}".`, 'warning');
        return;
    }
    player.money -= sector.studyCost;
    player.time -= sector.studyTime;
    player.energy = Math.max(0, Math.min(100, player.energy - sector.studyEnergy));
    player.skill = Number((player.skill + sector.studySkill).toFixed(2));
    player.career += 2;
    player.studiedThisWeek += 1;
    addLog(`${player.name} учится в "${sector.name}": -${sector.studyCost} денег, +${sector.studySkill.toFixed(2)} к навыку.`, 'positive');
    saveRoomState().finally(renderGameView);
}

function moveToSector(sectorId) {
    const player = getActivePlayer();
    if (!player) {
        return;
    }
    const targetSectorId = Number(sectorId);
    if (player.positionId === targetSectorId) {
        addLog(`${player.name}: вы уже находитесь в "${getCurrentSector(player).name}".`, 'warning');
        return;
    }

    const distance = getDistanceBetweenSectors(player.positionId, targetSectorId);
    const moveMoneyCost = 25;
    const moveTimeCost = distance;
    const moveEnergyCost = distance * 2;

    if (player.money < moveMoneyCost || player.time < moveTimeCost || player.energy < moveEnergyCost) {
        addLog(`${player.name}: недостаточно ресурсов для перемещения.`, 'warning');
        return;
    }

    const prevSectorName = getCurrentSector(player).name;
    player.money -= moveMoneyCost;
    player.positionId = targetSectorId;
    player.time -= moveTimeCost;
    player.energy = Math.max(0, player.energy - moveEnergyCost);
    addLog(`${player.name} перемещается: "${prevSectorName}" → "${getCurrentSector(player).name}".`, 'positive');
    saveRoomState().finally(renderGameView);
}

function applyDailyMaintenance(player) {
    const livingCost = 35 + Math.round(player.career * 0.6);
    player.money = Math.max(0, player.money - livingCost);
    if (player.studiedThisWeek === 0) {
        player.skill = Number(Math.max(1, player.skill - 0.05).toFixed(2));
    }
    if (player.workedThisWeek === 0 && player.studiedThisWeek === 0) {
        player.career = Math.max(0, player.career - 1);
    }
    if (player.workedThisWeek >= 2 && player.studiedThisWeek >= 1) {
        player.career += 1;
    }
    player.time = 24;
    player.energy = Math.min(100, player.energy + 45);
    player.workedThisWeek = 0;
    player.studiedThisWeek = 0;
    player.turnsLeft = 1;
    player.extraTurnPrice = 120;
    addLog(`${player.name}: ежедневные расходы ${livingCost}, ресурсы обновлены.`);
}

function nextPlayerTurn() {
    if (turnTransitionInProgress || !gameState.players.length) {
        return;
    }
    let nextIndex = (gameState.activePlayerIndex + 1) % gameState.players.length;
    if (nextIndex === 0) {
        gameState.day += 1;
        gameState.players.forEach(applyDailyMaintenance);
        addLog(`Новый день начался. Первым ходит ${gameState.players[nextIndex].name}.`, 'positive');
    }
    gameState.dayStarterIndex = 0;
    gameState.activePlayerIndex = nextIndex;
    saveRoomState().finally(() => {
        renderGameView();
        showTurnTransition(getActivePlayer(), renderGameView);
    });
}

function buyExtraTurn() {
    const player = getActivePlayer();
    if (!player) {
        return;
    }
    if (player.money < player.extraTurnPrice) {
        addLog(`${player.name}: не хватает денег на покупку хода.`, 'warning');
        return;
    }
    player.money -= player.extraTurnPrice;
    player.turnsLeft += 1;
    player.extraTurnPrice += 60;
    addLog(`${player.name} покупает дополнительный ход.`, 'positive');
    saveRoomState().finally(renderGameView);
}

function resetGame() {
    if (!gameState.players.length) {
        return;
    }
    gameState.day = 1;
    gameState.activePlayerIndex = 0;
    gameState.dayStarterIndex = 0;
    gameState.players.forEach((player) => {
        player.money = 900;
        player.time = 24;
        player.energy = 100;
        player.skill = 1;
        player.career = 0;
        player.workedThisWeek = 0;
        player.studiedThisWeek = 0;
        player.turnsLeft = 1;
        player.extraTurnPrice = 120;
        player.positionId = FIRST_PLAYABLE_SECTOR_ID;
    });
    eventLogElement.innerHTML = '';
    addLog(`Сессия сброшена. Игроки начинают маршрут с "${getSectorById(FIRST_PLAYABLE_SECTOR_ID).name}".`);
    saveRoomState().finally(() => {
        renderGameView();
        showTurnTransition(getActivePlayer(), renderGameView);
    });
}

function buildMap() {
    const typeIcons = { work: '💼', study: '📚', mixed: '🎯', network: '🤝' };
    mapElement.innerHTML = '';
    playableSectorDefinitions.forEach((sector) => {
        const sectorElement = document.createElement('button');
        sectorElement.type = 'button';
        sectorElement.className = `sector type-${sector.type}`;
        sectorElement.dataset.id = String(sector.id);
        sectorElement.innerHTML = `
            <span class="sector-icon">${typeIcons[sector.type] || '📍'}</span>
            <span class="sector-name">${sector.name}</span>
            <div class="player-markers"></div>
        `;
        sectorElement.addEventListener('click', () => moveToSector(sector.id));
        mapElement.appendChild(sectorElement);
    });
}

async function loadGameSession() {
    const gameKey = localStorage.getItem('game_key');
    if (!gameKey) {
        window.location.href = '/';
        return false;
    }
    currentRoomKey = gameKey;
    if (gameKeyValue) {
        gameKeyValue.textContent = gameKey;
    }
    configurePlayableSectors(gameKey);

    const response = await fetch(`/api/games/${encodeURIComponent(gameKey)}`);
    if (!response.ok) {
        window.location.href = '/';
        return false;
    }
    const data = await response.json();
    if (!data.state) {
        window.location.href = '/';
        return false;
    }
    applyState(data.state);
    return true;
}

async function leaveGameSession() {
    const gameKey = localStorage.getItem('game_key');
    const playerName = localStorage.getItem('player_name');
    localStorage.removeItem('game_key');
    localStorage.removeItem('player_name');
    if (gameKey && playerName) {
        try {
            await fetch('/api/games/leave', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ game_key: gameKey, username: playerName }),
            });
        } catch (_) {
            // no-op
        }
    }
    window.location.href = '/';
}

async function periodicSync() {
    try {
        const ok = await syncRoomState();
        if (ok) {
            renderGameView();
        }
    } catch (_) {
        // ignore temporary network errors
    }
}

async function initGamePage() {
    const loaded = await loadGameSession();
    if (!loaded) {
        return;
    }
    buildMap();
    renderGameView();
    if (syncTimer) {
        window.clearInterval(syncTimer);
    }
    syncTimer = window.setInterval(periodicSync, 2000);
    addLog('Игра запущена. Состояние синхронизируется через backend.', 'positive');
    showTurnTransition(getActivePlayer(), renderGameView);
}

nextTurnButton.addEventListener('click', nextPlayerTurn);
buyTurnButton.addEventListener('click', buyExtraTurn);
resetButton.addEventListener('click', resetGame);
leaveGameButton.addEventListener('click', leaveGameSession);
window.addEventListener('beforeunload', () => {
    if (syncTimer) {
        window.clearInterval(syncTimer);
    }
});

initGamePage();
