const gameState = {
    day: 1,
    activePlayerIndex: 0,
    dayStarterIndex: 0,
    players: [
        {
            id: 1,
            name: 'Игрок 1',
            money: 900,
            time: 24,
            energy: 100,
            skill: 1,
            career: 0,
            workedThisWeek: 0,
            studiedThisWeek: 0,
            turnsLeft: 1,
            extraTurnPrice: 120,
            positionId: 1
        },
        {
            id: 2,
            name: 'Игрок 2',
            money: 900,
            time: 24,
            energy: 100,
            skill: 1,
            career: 0,
            workedThisWeek: 0,
            studiedThisWeek: 0,
            turnsLeft: 1,
            extraTurnPrice: 120,
            positionId: 1
        }
    ]
};

const sectors = [
    { id: 1, name: 'Коворкинг', type: 'work', workMoney: 120, workTime: 8, workEnergy: 18, workSkill: 0.1, studyCost: 90, studyTime: 7, studyEnergy: 14, studySkill: 0.5 },
    { id: 2, name: 'Колледж', type: 'study', workMoney: 70, workTime: 6, workEnergy: 12, workSkill: 0.05, studyCost: 70, studyTime: 8, studyEnergy: 16, studySkill: 0.8 },
    { id: 3, name: 'IT-Офис', type: 'mixed', workMoney: 140, workTime: 9, workEnergy: 20, workSkill: 0.15, studyCost: 110, studyTime: 7, studyEnergy: 14, studySkill: 0.6, minSkillForWork: 2.2 },
    { id: 4, name: 'Языковой Центр', type: 'study', workMoney: 60, workTime: 5, workEnergy: 11, workSkill: 0.04, studyCost: 60, studyTime: 6, studyEnergy: 12, studySkill: 0.7 },
    { id: 5, name: 'Фриланс Площадка', type: 'work', workMoney: 100, workTime: 7, workEnergy: 16, workSkill: 0.08, studyCost: 85, studyTime: 6, studyEnergy: 12, studySkill: 0.45 },
    { id: 6, name: 'Ментор Клуб', type: 'network', workMoney: 90, workTime: 6, workEnergy: 14, workSkill: 0.1, studyCost: 50, studyTime: 5, studyEnergy: 10, studySkill: 0.55 },
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
    { id: 25, name: 'Парк Восстановления', type: 'rest', workMoney: 40, workTime: 3, workEnergy: -22, workSkill: 0.02, studyCost: 30, studyTime: 3, studyEnergy: -12, studySkill: 0.15 }
];

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
const playersBoard = document.getElementById('playersBoard');

const nextTurnButton = document.getElementById('nextTurnButton');
const buyTurnButton = document.getElementById('buyTurnButton');
const resetButton = document.getElementById('resetButton');
const MAP_SIZE = 5;

function getActivePlayer() {
    return gameState.players[gameState.activePlayerIndex];
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

function getSectorById(id) {
    return sectors.find((sector) => sector.id === id);
}

function getCurrentSector(player) {
    return getSectorById(player.positionId);
}

function getNextSectorId(currentId) {
    return currentId >= sectors.length ? 1 : currentId + 1;
}

function getPrevSectorId(currentId) {
    return currentId <= 1 ? sectors.length : currentId - 1;
}

function getUpSectorId(currentId) {
    const upId = currentId - MAP_SIZE;
    return upId >= 1 ? upId : null;
}

function getDownSectorId(currentId) {
    const downId = currentId + MAP_SIZE;
    return downId <= sectors.length ? downId : null;
}

function predictWorkIncome(player, sector) {
    const skillFactor = 1 + player.skill * 0.15;
    const careerFactor = 1 + player.career * 0.06;
    return Math.round(sector.workMoney * skillFactor * careerFactor);
}

function renderPlayersBoard() {
    playersBoard.innerHTML = '';

    gameState.players.forEach((player, index) => {
        const row = document.createElement('li');
        if (index === gameState.activePlayerIndex) {
            row.classList.add('active-player');
        }
        if (index === gameState.dayStarterIndex) {
            row.classList.add('day-starter');
        }

        row.innerHTML = `
            <span>${player.name}</span>
            <span>$${player.money} | Навык ${player.skill.toFixed(1)} | Ходы ${player.turnsLeft} | Место ${player.positionId}</span>
        `;

        playersBoard.appendChild(row);
    });
}

function renderStats() {
    const player = getActivePlayer();

    dayValue.textContent = String(gameState.day);
    moneyValue.textContent = String(player.money);
    timeValue.textContent = String(player.time);
    energyValue.textContent = String(player.energy);
    skillValue.textContent = player.skill.toFixed(1);
    careerValue.textContent = String(player.career);

    currentPlayerValue.textContent = player.name;
    dayStarterValue.textContent = gameState.players[gameState.dayStarterIndex].name;
    turnsLeftValue.textContent = String(player.turnsLeft);
    buyTurnButton.textContent = `Купить ход (${player.extraTurnPrice})`;

    renderPlayersBoard();
    renderMapState();
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
    if (player.time <= 0) {
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
    if (!sector) {
        return;
    }

    if (!consumeTurn(player)) {
        return;
    }

    const minSkillForWork = sector.minSkillForWork || 0;
    if (player.skill < minSkillForWork) {
        player.turnsLeft += 1;
        addLog(`${player.name}: для работы в "${sector.name}" нужна квалификация ${minSkillForWork.toFixed(1)}. Сначала пройдите обучение.`, 'warning');
        return;
    }

    if (player.time < sector.workTime) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно времени для работы в "${sector.name}".`, 'warning');
        if (player.time <= 0) {
            autoPassTurnIfNoTime();
        }
        return;
    }

    if (player.energy < Math.max(0, sector.workEnergy)) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно энергии для работы в "${sector.name}".`, 'warning');
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
    if (autoPassTurnIfNoTime()) {
        return;
    }
    renderStats();
    renderSectorInfo();
}

function doStudy() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!sector) {
        return;
    }

    if (!consumeTurn(player)) {
        return;
    }

    if (player.money < sector.studyCost) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно денег для учебы в "${sector.name}".`, 'warning');
        return;
    }

    if (player.time < sector.studyTime) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно времени для учебы в "${sector.name}".`, 'warning');
        if (player.time <= 0) {
            autoPassTurnIfNoTime();
        }
        return;
    }

    if (player.energy < Math.max(0, sector.studyEnergy)) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно энергии для учебы в "${sector.name}".`, 'warning');
        return;
    }

    player.money -= sector.studyCost;
    player.time -= sector.studyTime;
    player.energy = Math.max(0, Math.min(100, player.energy - sector.studyEnergy));
    player.skill = Number((player.skill + sector.studySkill).toFixed(2));
    player.career += 2;
    player.studiedThisWeek += 1;

    addLog(`${player.name} учится в "${sector.name}": -${sector.studyCost} денег, +${sector.studySkill.toFixed(2)} к навыку.`, 'positive');
    if (autoPassTurnIfNoTime()) {
        return;
    }
    renderStats();
    renderSectorInfo();
}

function moveToLocation(targetSectorId, directionLabel) {
    const player = getActivePlayer();
    const currentSector = getCurrentSector(player);
    if (!currentSector) {
        return;
    }

    if (!consumeTurn(player)) {
        return;
    }

    const moveMoneyCost = 25;
    const moveTimeCost = 2;
    const moveEnergyCost = 4;

    if (player.money < moveMoneyCost) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно денег на переход в следующую локацию.`, 'warning');
        return;
    }

    if (player.time < moveTimeCost) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно времени на перемещение.`, 'warning');
        if (player.time <= 0) {
            autoPassTurnIfNoTime();
        }
        return;
    }

    if (player.energy < moveEnergyCost) {
        player.turnsLeft += 1;
        addLog(`${player.name}: недостаточно энергии на перемещение.`, 'warning');
        return;
    }

    player.money -= moveMoneyCost;
    player.positionId = targetSectorId;
    player.time -= moveTimeCost;
    player.energy = Math.max(0, player.energy - moveEnergyCost);

    const newSector = getCurrentSector(player);
    addLog(`${player.name} идет ${directionLabel}: "${currentSector.name}" -> "${newSector.name}" (-${moveMoneyCost} денег, -${moveTimeCost}ч, -${moveEnergyCost} энергии).`, 'positive');
    if (autoPassTurnIfNoTime()) {
        return;
    }
    renderStats();
    renderSectorInfo();
}

function moveToNextLocation() {
    const player = getActivePlayer();
    moveToLocation(getNextSectorId(player.positionId), 'вперед');
}

function moveToPrevLocation() {
    const player = getActivePlayer();
    moveToLocation(getPrevSectorId(player.positionId), 'назад');
}

function moveUpLocation() {
    const player = getActivePlayer();
    const upId = getUpSectorId(player.positionId);
    if (upId === null) {
        addLog(`${player.name}: выше перехода нет.`, 'warning');
        return;
    }
    moveToLocation(upId, 'вверх');
}

function moveDownLocation() {
    const player = getActivePlayer();
    const downId = getDownSectorId(player.positionId);
    if (downId === null) {
        addLog(`${player.name}: ниже перехода нет.`, 'warning');
        return;
    }
    moveToLocation(downId, 'вниз');
}

function renderSectorInfo() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!sector) {
        return;
    }

    const nextSector = getSectorById(getNextSectorId(player.positionId));
    const prevSector = getSectorById(getPrevSectorId(player.positionId));
    const upId = getUpSectorId(player.positionId);
    const downId = getDownSectorId(player.positionId);
    const upSector = upId ? getSectorById(upId) : null;
    const downSector = downId ? getSectorById(downId) : null;
    const minSkillForWork = sector.minSkillForWork || 0;

    sectorInfoElement.innerHTML = `
        <h4>${sector.name}</h4>
        <p>Игрок: <strong>${player.name}</strong></p>
        <p>Текущее место: <strong>#${sector.id}</strong></p>
        <p>Маршрут: назад <strong>#${prevSector.id} ${prevSector.name}</strong> | вперед <strong>#${nextSector.id} ${nextSector.name}</strong></p>
        <p>Вертикаль: вверх <strong>${upSector ? `#${upSector.id} ${upSector.name}` : 'нет перехода'}</strong> | вниз <strong>${downSector ? `#${downSector.id} ${downSector.name}` : 'нет перехода'}</strong></p>
        <p>Фокус зоны: <strong>${sector.type}</strong></p>
        <div class="impact">
            <span>Работа: +${predictWorkIncome(player, sector)} денег</span>
            <span>Учеба: +${sector.studySkill} к навыку</span>
            <span>Время: ${sector.workTime}ч / ${sector.studyTime}ч</span>
            <span>Энергия: -${Math.max(0, sector.workEnergy)} / -${Math.max(0, sector.studyEnergy)}</span>
            <span>Переход: -25 денег, -2ч и -4 энергии</span>
            <span>Порог работы: ${minSkillForWork > 0 ? minSkillForWork.toFixed(1) : 'нет'}</span>
        </div>
        <div class="action-buttons">
            <button id="moveBackButton" class="invest-button ghost" type="button">Перейти назад (1 ход)</button>
            <button id="moveNextButton" class="invest-button" type="button">Перейти вперед (1 ход)</button>
            <button id="moveUpButton" class="invest-button" type="button">Перейти вверх (1 ход)</button>
            <button id="moveDownButton" class="invest-button" type="button">Перейти вниз (1 ход)</button>
            <button id="workButton" class="invest-button action-work" type="button">Пойти работать (1 ход)</button>
            <button id="studyButton" class="invest-button action-study" type="button">Получить образование (1 ход)</button>
        </div>
    `;

    const moveBackButton = document.getElementById('moveBackButton');
    const moveNextButton = document.getElementById('moveNextButton');
    const moveUpButton = document.getElementById('moveUpButton');
    const moveDownButton = document.getElementById('moveDownButton');
    const workButton = document.getElementById('workButton');
    const studyButton = document.getElementById('studyButton');

    moveBackButton.addEventListener('click', moveToPrevLocation);
    moveNextButton.addEventListener('click', moveToNextLocation);
    moveUpButton.addEventListener('click', moveUpLocation);
    moveDownButton.addEventListener('click', moveDownLocation);
    workButton.addEventListener('click', doWork);
    studyButton.addEventListener('click', doStudy);
}

function renderMapState() {
    const activePlayer = getActivePlayer();
    const nextId = getNextSectorId(activePlayer.positionId);
    const prevId = getPrevSectorId(activePlayer.positionId);
    const upId = getUpSectorId(activePlayer.positionId);
    const downId = getDownSectorId(activePlayer.positionId);

    document.querySelectorAll('.sector').forEach((element) => {
        const sectorId = Number(element.dataset.id);
        element.classList.remove('active', 'current-location', 'next-location', 'prev-location', 'up-location', 'down-location');

        if (sectorId === activePlayer.positionId) {
            element.classList.add('current-location');
        }
        if (sectorId === nextId) {
            element.classList.add('next-location');
        }
        if (sectorId === prevId) {
            element.classList.add('prev-location');
        }
        if (upId !== null && sectorId === upId) {
            element.classList.add('up-location');
        }
        if (downId !== null && sectorId === downId) {
            element.classList.add('down-location');
        }

        const markers = gameState.players
            .filter((player) => player.positionId === sectorId)
            .map((player) => `<span class="marker">P${player.id}</span>`)
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

function applyDailyMaintenance(player) {
    const livingCost = 35 + Math.round(player.career * 0.6);
    player.money -= livingCost;

    if (player.studiedThisWeek === 0) {
        player.skill = Number(Math.max(1, player.skill - 0.05).toFixed(2));
    }

    if (player.workedThisWeek === 0 && player.studiedThisWeek === 0) {
        player.career = Math.max(0, player.career - 1);
    }

    if (player.money < 0) {
        player.money = 0;
        player.career = Math.max(0, player.career - 2);
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
    let nextIndex = (gameState.activePlayerIndex + 1) % gameState.players.length;

    if (nextIndex === gameState.dayStarterIndex) {
        gameState.day += 1;
        gameState.players.forEach((player) => applyDailyMaintenance(player));
        gameState.dayStarterIndex = (gameState.dayStarterIndex + 1) % gameState.players.length;
        nextIndex = gameState.dayStarterIndex;
        addLog(`Новый день начался. Первым ходит ${gameState.players[nextIndex].name}.`, 'positive');
    }

    gameState.activePlayerIndex = nextIndex;

    renderStats();
    renderSectorInfo();
}

function buyExtraTurn() {
    const player = getActivePlayer();
    if (player.money < player.extraTurnPrice) {
        addLog(`${player.name}: не хватает денег на покупку хода.`, 'warning');
        return;
    }

    player.money -= player.extraTurnPrice;
    player.turnsLeft += 1;
    player.extraTurnPrice += 60;

    addLog(`${player.name} покупает дополнительный ход.`, 'positive');
    renderStats();
    renderSectorInfo();
}

function resetGame() {
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
        player.positionId = 1;
    });

    eventLogElement.innerHTML = '';

    renderStats();
    renderSectorInfo();
    addLog('Сессия сброшена. Игроки начинают маршрут с места #1.');
}

function buildMap() {
    sectors.forEach((sector) => {
        const sectorElement = document.createElement('button');
        sectorElement.type = 'button';
        sectorElement.className = `sector type-${sector.type}`;
        sectorElement.dataset.id = String(sector.id);
        sectorElement.innerHTML = `
            <span class="sector-name">#${sector.id} ${sector.name}</span>
            <span class="sector-meta">Работа: +${sector.workMoney} | Учеба: +${sector.studySkill}</span>
            <div class="player-markers"></div>
        `;
        mapElement.appendChild(sectorElement);
    });
}

nextTurnButton.addEventListener('click', nextPlayerTurn);
buyTurnButton.addEventListener('click', buyExtraTurn);
resetButton.addEventListener('click', resetGame);

buildMap();
renderStats();
renderSectorInfo();
addLog('Игра запущена. Стартовый игрок дня ротируется, чтобы порядок хода был честным.');
