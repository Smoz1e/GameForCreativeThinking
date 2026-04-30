const gameState = {
    day: 1,
    activePlayerIndex: 0,
    dayStarterIndex: 0,
    winnerId: null,
    winnerReason: '',
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
            positionId: 1,
            trackId: null,
            careerFocus: {
                it: 0,
                business: 0,
                freelance: 0,
                government: 0,
                police: 0
            },
            perks: {
                livingCostDiscount: 0,
                nextWorkIncomeBonus: 0,
                nextStudySkillBonus: 0
            },
            stats: {
                eventsTriggered: 0,
                successfulEvents: 0,
                boosts: {
                    businessPolice: false,
                    itFreelance: false,
                    govIt: false,
                    policeFreelance: false,
                    businessIt: false,
                    triadMastery: false
                }
            }
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
            positionId: 1,
            trackId: null,
            careerFocus: {
                it: 0,
                business: 0,
                freelance: 0,
                government: 0,
                police: 0
            },
            perks: {
                livingCostDiscount: 0,
                nextWorkIncomeBonus: 0,
                nextStudySkillBonus: 0
            },
            stats: {
                eventsTriggered: 0,
                successfulEvents: 0,
                boosts: {
                    businessPolice: false,
                    itFreelance: false,
                    govIt: false,
                    policeFreelance: false,
                    businessIt: false,
                    triadMastery: false
                }
            }
        },
        {
            id: 3,
            name: 'Игрок 3',
            money: 900,
            time: 24,
            energy: 100,
            skill: 1,
            career: 0,
            workedThisWeek: 0,
            studiedThisWeek: 0,
            turnsLeft: 1,
            extraTurnPrice: 120,
            positionId: 1,
            trackId: null,
            careerFocus: {
                it: 0,
                business: 0,
                freelance: 0,
                government: 0,
                police: 0
            },
            perks: {
                livingCostDiscount: 0,
                nextWorkIncomeBonus: 0,
                nextStudySkillBonus: 0
            },
            stats: {
                eventsTriggered: 0,
                successfulEvents: 0,
                boosts: {
                    businessPolice: false,
                    itFreelance: false,
                    govIt: false,
                    policeFreelance: false,
                    businessIt: false,
                    triadMastery: false
                }
            }
        }
    ]
};

const sectors = [
    // cellCategory:
    // - neutral: базовые клетки без событий при входе
    // - event: событие при входе (риск/награда)
    // - support: помощь (восстановление/бонусы)
    // - balancing: баланс (налоги/штрафы/стабильность)
    { id: 1, name: 'Коворкинг', type: 'work', cellCategory: 'neutral', workMoney: 120, workTime: 8, workEnergy: 18, workSkill: 0.1, studyCost: 90, studyTime: 7, studyEnergy: 14, studySkill: 0.5 },
    { id: 2, name: 'Колледж', type: 'study', cellCategory: 'neutral', workMoney: 70, workTime: 6, workEnergy: 12, workSkill: 0.05, studyCost: 70, studyTime: 8, studyEnergy: 16, studySkill: 0.8 },
    { id: 3, name: 'IT-Офис', type: 'mixed', cellCategory: 'balancing', workMoney: 140, workTime: 9, workEnergy: 20, workSkill: 0.15, studyCost: 110, studyTime: 7, studyEnergy: 14, studySkill: 0.6, minSkillForWork: 2.2, enterEffect: { kind: 'checkup', skillGateHint: true } },
    { id: 4, name: 'Языковой Центр', type: 'study', cellCategory: 'neutral', workMoney: 60, workTime: 5, workEnergy: 11, workSkill: 0.04, studyCost: 60, studyTime: 6, studyEnergy: 12, studySkill: 0.7 },
    { id: 5, name: 'Фриланс Площадка', type: 'work', cellCategory: 'event', workMoney: 100, workTime: 7, workEnergy: 16, workSkill: 0.08, studyCost: 85, studyTime: 6, studyEnergy: 12, studySkill: 0.45, enterEffect: { kind: 'freelanceBrief' } },
    { id: 6, name: 'Ментор Клуб', type: 'network', cellCategory: 'support', workMoney: 90, workTime: 6, workEnergy: 14, workSkill: 0.1, studyCost: 50, studyTime: 5, studyEnergy: 10, studySkill: 0.55, enterEffect: { kind: 'mentorBoost' } },
    { id: 7, name: 'Университет', type: 'study', cellCategory: 'neutral', workMoney: 80, workTime: 6, workEnergy: 13, workSkill: 0.06, studyCost: 120, studyTime: 9, studyEnergy: 18, studySkill: 1.1 },
    { id: 8, name: 'Бизнес-Инкубатор', type: 'mixed', cellCategory: 'event', workMoney: 130, workTime: 8, workEnergy: 17, workSkill: 0.14, studyCost: 95, studyTime: 7, studyEnergy: 13, studySkill: 0.65, minSkillForWork: 2.8, enterEffect: { kind: 'pitchDay' } },
    { id: 9, name: 'Продажи', type: 'work', cellCategory: 'balancing', workMoney: 135, workTime: 9, workEnergy: 21, workSkill: 0.09, studyCost: 75, studyTime: 6, studyEnergy: 11, studySkill: 0.4, enterEffect: { kind: 'pressure' } },
    { id: 10, name: 'Онлайн Курсы', type: 'study', cellCategory: 'support', workMoney: 65, workTime: 5, workEnergy: 10, workSkill: 0.03, studyCost: 40, studyTime: 4, studyEnergy: 8, studySkill: 0.5, enterEffect: { kind: 'studyCoupon' } },
    { id: 11, name: 'Стажировка', type: 'mixed', cellCategory: 'neutral', workMoney: 85, workTime: 7, workEnergy: 14, workSkill: 0.2, studyCost: 60, studyTime: 6, studyEnergy: 12, studySkill: 0.7 },
    { id: 12, name: 'Финансовая Школа', type: 'study', cellCategory: 'support', workMoney: 70, workTime: 5, workEnergy: 10, workSkill: 0.06, studyCost: 105, studyTime: 8, studyEnergy: 14, studySkill: 0.95, enterEffect: { kind: 'budgeting' } },
    { id: 13, name: 'Партнерская Сеть', type: 'network', cellCategory: 'event', workMoney: 110, workTime: 7, workEnergy: 16, workSkill: 0.12, studyCost: 80, studyTime: 6, studyEnergy: 12, studySkill: 0.55, enterEffect: { kind: 'referral' } },
    { id: 14, name: 'Проектная Лаба', type: 'mixed', cellCategory: 'balancing', workMoney: 125, workTime: 8, workEnergy: 18, workSkill: 0.18, studyCost: 100, studyTime: 7, studyEnergy: 13, studySkill: 0.8, minSkillForWork: 3.4, enterEffect: { kind: 'deadline' } },
    { id: 15, name: 'Карьерный Форум', type: 'network', cellCategory: 'event', workMoney: 95, workTime: 6, workEnergy: 13, workSkill: 0.11, studyCost: 55, studyTime: 5, studyEnergy: 9, studySkill: 0.45, enterEffect: { kind: 'jobOffer' } },
    { id: 16, name: 'Сервисный Центр', type: 'work', cellCategory: 'balancing', workMoney: 105, workTime: 8, workEnergy: 17, workSkill: 0.08, studyCost: 75, studyTime: 6, studyEnergy: 11, studySkill: 0.4, enterEffect: { kind: 'stability' } },
    { id: 17, name: 'Data Academy', type: 'study', cellCategory: 'neutral', workMoney: 78, workTime: 5, workEnergy: 11, workSkill: 0.07, studyCost: 115, studyTime: 8, studyEnergy: 15, studySkill: 1.0 },
    { id: 18, name: 'Стартап Хаб', type: 'mixed', cellCategory: 'event', workMoney: 145, workTime: 9, workEnergy: 21, workSkill: 0.2, studyCost: 120, studyTime: 8, studyEnergy: 15, studySkill: 0.85, minSkillForWork: 4.2, enterEffect: { kind: 'startupRoll' } },
    { id: 19, name: 'Нетворкинг Кафе', type: 'network', cellCategory: 'support', workMoney: 88, workTime: 6, workEnergy: 12, workSkill: 0.1, studyCost: 45, studyTime: 4, studyEnergy: 8, studySkill: 0.35, enterEffect: { kind: 'coffeeChat' } },
    { id: 20, name: 'Госслужба', type: 'work', cellCategory: 'balancing', workMoney: 115, workTime: 8, workEnergy: 16, workSkill: 0.1, studyCost: 50, studyTime: 5, studyEnergy: 9, studySkill: 0.3, enterEffect: { kind: 'taxCheck' } },
    { id: 21, name: 'Полицейская Академия', type: 'study', cellCategory: 'balancing', workMoney: 95, workTime: 6, workEnergy: 12, workSkill: 0.08, studyCost: 140, studyTime: 9, studyEnergy: 18, studySkill: 1.15, enterEffect: { kind: 'disciplineDrill' } },
    { id: 22, name: 'Медиа Агентство', type: 'mixed', cellCategory: 'neutral', workMoney: 128, workTime: 8, workEnergy: 17, workSkill: 0.13, studyCost: 85, studyTime: 6, studyEnergy: 12, studySkill: 0.55 },
    { id: 23, name: 'Soft Skills Hub', type: 'study', cellCategory: 'support', workMoney: 72, workTime: 5, workEnergy: 10, workSkill: 0.05, studyCost: 65, studyTime: 6, studyEnergy: 11, studySkill: 0.7, enterEffect: { kind: 'confidence' } },
    { id: 24, name: 'HR Центр', type: 'work', cellCategory: 'event', workMoney: 118, workTime: 8, workEnergy: 16, workSkill: 0.09, studyCost: 70, studyTime: 5, studyEnergy: 10, studySkill: 0.42, minSkillForWork: 2.0, enterEffect: { kind: 'interview' } },
    { id: 25, name: 'Парк Восстановления', type: 'rest', cellCategory: 'support', workMoney: 40, workTime: 3, workEnergy: -22, workSkill: 0.02, studyCost: 30, studyTime: 3, studyEnergy: -12, studySkill: 0.15, enterEffect: { kind: 'recovery' } }
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

const careerTracks = [
    {
        id: 'it',
        name: 'IT‑карьера',
        description: 'Больше учёбы, высокий доход позже.',
        workIncomeMultiplier: 1.0,
        studySkillMultiplier: 1.25,
        studyCostMultiplier: 1.05,
        eventLuck: 0
    },
    {
        id: 'business',
        name: 'Бизнес‑путь',
        description: 'Меньше формального обучения, выше риск, доход нестабильный.',
        workIncomeMultiplier: 1.12,
        studySkillMultiplier: 0.95,
        studyCostMultiplier: 0.95,
        eventLuck: 1
    },
    {
        id: 'freelance',
        name: 'Фриланс‑путь',
        description: 'Гибкость, средний доход, зависит от навыков.',
        workIncomeMultiplier: 1.02,
        studySkillMultiplier: 1.05,
        studyCostMultiplier: 1.0,
        eventLuck: 0
    },
    {
        id: 'stable',
        name: 'Стабильная карьера',
        description: 'Меньше риска, плавный рост.',
        workIncomeMultiplier: 0.98,
        studySkillMultiplier: 1.0,
        studyCostMultiplier: 0.98,
        eventLuck: -1
    }
];

const winConditions = [
    {
        id: 'financialFreedom',
        title: 'Финансовая независимость',
        description: 'Накопить 5000 денег.',
        check: (player) => player.money >= 5000
    },
    {
        id: 'expert',
        title: 'Экспертность',
        description: 'Навык 10.0+ и карьерный уровень 20+.',
        check: (player) => player.skill >= 10 && player.career >= 20
    },
    {
        id: 'topCareer',
        title: 'Топ‑карьера',
        description: 'Карьерный уровень 35+ и деньги 3000+.',
        check: (player) => player.career >= 35 && player.money >= 3000
    },
    {
        id: 'balancedLife',
        title: 'Сбалансированная жизнь',
        description: 'Деньги 2500+, навык 8.0+, энергия 70+.',
        check: (player) => player.money >= 2500 && player.skill >= 8 && player.energy >= 70
    },
    {
        id: 'entrepreneur',
        title: 'Предприниматель',
        description: 'Сделать 3+ успешных событий и иметь 3500+ денег.',
        check: (player) => (player.stats?.successfulEvents || 0) >= 3 && player.money >= 3500
    }
];

function getActivePlayer() {
    return gameState.players[gameState.activePlayerIndex];
}

function getTrack(player) {
    if (!player.trackId) {
        return null;
    }
    return careerTracks.find((track) => track.id === player.trackId) || null;
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function setWinner(player, reason) {
    gameState.winnerId = player.id;
    gameState.winnerReason = reason;
    addLog(`Победа! ${player.name}: ${reason}`, 'positive');
}

function checkWin(player) {
    if (gameState.winnerId) {
        return;
    }
    const matched = winConditions.find((condition) => condition.check(player, gameState));
    if (matched) {
        setWinner(player, `${matched.title} — ${matched.description}`);
    }
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

function getDistanceBetweenSectors(fromId, toId) {
    // Расчет расстояния Manhattan в сетке 5x5
    const fromRow = Math.floor((fromId - 1) / MAP_SIZE);
    const fromCol = (fromId - 1) % MAP_SIZE;

    const toRow = Math.floor((toId - 1) / MAP_SIZE);
    const toCol = (toId - 1) % MAP_SIZE;

    const distance = Math.abs(fromRow - toRow) + Math.abs(fromCol - toCol);
    return Math.max(1, distance); // Минимум 1, даже если на одной клетке
}

function predictWorkIncome(player, sector) {
    const skillFactor = 1 + player.skill * 0.15;
    const careerFactor = 1 + player.career * 0.06;
    const track = getTrack(player);
    const trackFactor = track ? track.workIncomeMultiplier : 1;
    const perkBonus = player.perks?.nextWorkIncomeBonus ? 1 + player.perks.nextWorkIncomeBonus : 1;
    return Math.round(sector.workMoney * skillFactor * careerFactor * trackFactor * perkBonus);
}

function ensureCareerFocus(player) {
    if (!player.careerFocus) {
        player.careerFocus = { it: 0, business: 0, freelance: 0, government: 0, police: 0 };
    }
}

function getSectorDomainWeights(sector) {
    const weights = { it: 0, business: 0, freelance: 0, government: 0, police: 0 };
    const name = sector.name.toLowerCase();

    if (name.includes('it') || name.includes('data') || name.includes('soft') || name.includes('онлайн')) {
        weights.it += 1;
    }
    if (name.includes('бизнес') || name.includes('финансов') || name.includes('стартап') || name.includes('продаж') || name.includes('mba')) {
        weights.business += 1;
    }
    if (name.includes('фриланс') || name.includes('коворкинг') || name.includes('медиа')) {
        weights.freelance += 1;
    }
    if (name.includes('гос') || name.includes('hr') || name.includes('сервис')) {
        weights.government += 1;
    }
    if (name.includes('полиц')) {
        weights.police += 2;
        weights.government += 1;
    }

    return weights;
}

function resolveTrackByFocus(player) {
    const f = player.careerFocus;
    const scores = [
        { id: 'it', score: f.it * 1.2 + f.freelance * 0.4 },
        { id: 'business', score: f.business * 1.15 + f.government * 0.2 },
        { id: 'freelance', score: f.freelance * 1.2 + f.it * 0.35 },
        { id: 'stable', score: f.government * 1.1 + f.police * 0.9 }
    ];
    scores.sort((a, b) => b.score - a.score);
    return scores[0].score > 0 ? scores[0].id : null;
}

function applyHybridBoosts(player) {
    const boosts = player.stats?.boosts;
    if (!boosts) {
        return;
    }
    const f = player.careerFocus;

    // Гибрид "бизнес + полиция": при среднем развитии обоих направлений.
    if (!boosts.businessPolice && f.business >= 8 && f.police >= 8) {
        boosts.businessPolice = true;
        player.money += 420;
        player.career += 2;
        player.energy = clamp(player.energy + 12, 0, 100);
        addLog(`${player.name}: синергия "Бизнес + Полиция" — внезапный буст: +420 денег, +2 к карьере, +12 энергии!`, 'positive');
    }

    // Гибрид "IT + Фриланс": ускоренный рост в проектной точке.
    if (!boosts.itFreelance && f.it >= 9 && f.freelance >= 9) {
        boosts.itFreelance = true;
        player.money += 360;
        player.skill = Number((player.skill + 0.8).toFixed(2));
        player.perks.nextWorkIncomeBonus = (player.perks.nextWorkIncomeBonus || 0) + 0.15;
        addLog(`${player.name}: синергия "IT + Фриланс" — буст: +360 денег, +0.80 навыка, +15% к следующему доходу!`, 'positive');
    }

    // Гибрид "Гос + IT": цифровая трансформация.
    if (!boosts.govIt && f.government >= 8 && f.it >= 8) {
        boosts.govIt = true;
        player.money += 300;
        player.career += 2;
        player.skill = Number((player.skill + 0.45).toFixed(2));
        addLog(`${player.name}: синергия "Гос + IT" — цифровой буст: +300 денег, +2 к карьере, +0.45 к навыку!`, 'positive');
    }

    // Гибрид "Полиция + Фриланс": высокая адаптивность на задачах.
    if (!boosts.policeFreelance && f.police >= 7 && f.freelance >= 9) {
        boosts.policeFreelance = true;
        player.money += 260;
        player.energy = clamp(player.energy + 16, 0, 100);
        player.perks.nextWorkIncomeBonus = (player.perks.nextWorkIncomeBonus || 0) + 0.12;
        addLog(`${player.name}: синергия "Полиция + Фриланс" — тактический буст: +260 денег, +16 энергии, +12% к следующему доходу!`, 'positive');
    }

    // Гибрид "Бизнес + IT": продуктовый рывок.
    if (!boosts.businessIt && f.business >= 10 && f.it >= 10) {
        boosts.businessIt = true;
        player.money += 500;
        player.skill = Number((player.skill + 0.65).toFixed(2));
        player.career += 1;
        addLog(`${player.name}: синергия "Бизнес + IT" — продуктовый рывок: +500 денег, +0.65 навыка, +1 к карьере!`, 'positive');
    }

    // Тройная ротация: IT + Бизнес + Фриланс.
    if (!boosts.triadMastery && f.it >= 11 && f.business >= 9 && f.freelance >= 9) {
        boosts.triadMastery = true;
        player.money += 700;
        player.skill = Number((player.skill + 1.0).toFixed(2));
        player.career += 2;
        player.energy = clamp(player.energy + 10, 0, 100);
        addLog(`${player.name}: тройная синергия "IT + Бизнес + Фриланс" — мегабуст: +700 денег, +1.00 навыка, +2 к карьере, +10 энергии!`, 'positive');
    }
}

function registerCareerProgress(player, sector, actionType) {
    ensureCareerFocus(player);
    const weights = getSectorDomainWeights(sector);
    const actionFactor = actionType === 'study' ? 2 : actionType === 'work' ? 2 : 1;

    Object.keys(weights).forEach((key) => {
        const gain = weights[key] * actionFactor;
        if (gain > 0) {
            player.careerFocus[key] += gain;
        }
    });

    player.trackId = resolveTrackByFocus(player);
    applyHybridBoosts(player);
}

function getCategoryLabel(cellCategory) {
    switch (cellCategory) {
        case 'neutral':
            return 'Нейтр.';
        case 'event':
            return 'Событие';
        case 'support':
            return 'Помощь';
        case 'balancing':
            return 'Баланс';
        default:
            return 'Клетка';
    }
}

function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function applyEnterEffect(player, sector) {
    if (!sector?.enterEffect || gameState.winnerId) {
        return;
    }

    const effect = sector.enterEffect;
    const track = getTrack(player);
    const luck = track ? track.eventLuck : 0;

    const logSuccess = (text) => {
        if (player.stats) {
            player.stats.eventsTriggered += 1;
            player.stats.successfulEvents += 1;
        }
        addLog(`${player.name}: событие — ${text}`, 'positive');
    };
    const logFail = (text) => {
        if (player.stats) {
            player.stats.eventsTriggered += 1;
        }
        addLog(`${player.name}: событие — ${text}`, 'warning');
    };

    switch (effect.kind) {
        case 'recovery': {
            const energyGain = 18;
            const timeGain = 2;
            player.energy = clamp(player.energy + energyGain, 0, 100);
            player.time = clamp(player.time + timeGain, 0, 24);
            addLog(`${player.name}: восстановление в парке: +${energyGain} энергии, +${timeGain}ч времени.`, 'positive');
            return;
        }
        case 'mentorBoost': {
            const bonus = 0.25;
            player.perks.nextStudySkillBonus = (player.perks.nextStudySkillBonus || 0) + bonus;
            addLog(`${player.name}: менторская сессия — следующий “Учиться” даст +${Math.round(bonus * 100)}% навыка.`, 'positive');
            return;
        }
        case 'studyCoupon': {
            const bonusMoney = 15;
            player.money += bonusMoney;
            addLog(`${player.name}: промокод — +${bonusMoney} денег (на будущую учёбу).`, 'positive');
            return;
        }
        case 'budgeting': {
            const discount = 12;
            player.perks.livingCostDiscount = (player.perks.livingCostDiscount || 0) + discount;
            addLog(`${player.name}: финплан — скидка -${discount} к ежедневным расходам (1 раз).`, 'positive');
            return;
        }
        case 'coffeeChat': {
            const energyGain = 8;
            player.energy = clamp(player.energy + energyGain, 0, 100);
            player.perks.nextWorkIncomeBonus = (player.perks.nextWorkIncomeBonus || 0) + 0.08;
            addLog(`${player.name}: полезный разговор — +${energyGain} энергии и +8% к следующему доходу от работы.`, 'positive');
            return;
        }
        case 'confidence': {
            const skillGain = 0.15;
            player.skill = Number((player.skill + skillGain).toFixed(2));
            addLog(`${player.name}: уверенность — +${skillGain.toFixed(2)} к навыку.`, 'positive');
            return;
        }
        case 'stability': {
            const discount = 10;
            player.perks.livingCostDiscount = (player.perks.livingCostDiscount || 0) + discount;
            addLog(`${player.name}: стабильность — -${discount} к ежедневным расходам (1 раз).`, 'positive');
            return;
        }
        case 'taxCheck': {
            const tax = 25;
            player.money = Math.max(0, player.money - tax);
            addLog(`${player.name}: проверка — -${tax} денег.`, 'warning');
            return;
        }
        case 'pressure': {
            const loss = 6;
            player.energy = clamp(player.energy - loss, 0, 100);
            addLog(`${player.name}: давление KPI — -${loss} энергии.`, 'warning');
            return;
        }
        case 'deadline': {
            const timeLoss = 2;
            player.time = clamp(player.time - timeLoss, 0, 24);
            addLog(`${player.name}: дедлайн — -${timeLoss}ч времени.`, 'warning');
            return;
        }
        case 'burnoutRisk': {
            if (player.energy >= 80) {
                logSuccess('фокус: +0.20 к навыку.');
                player.skill = Number((player.skill + 0.2).toFixed(2));
            } else {
                logFail('перегруз: -12 энергии.');
                player.energy = clamp(player.energy - 12, 0, 100);
            }
            return;
        }
        case 'disciplineDrill': {
            const skillGain = 0.12;
            const energyLoss = 4;
            player.skill = Number((player.skill + skillGain).toFixed(2));
            player.energy = clamp(player.energy - energyLoss, 0, 100);
            addLog(`${player.name}: полицейская подготовка — +${skillGain.toFixed(2)} к навыку и -${energyLoss} энергии.`, 'positive');
            return;
        }
        case 'jobOffer': {
            const threshold = 2 + luck * 0.2;
            if (player.skill >= threshold) {
                const bonus = 120 + roll(0, 80);
                logSuccess(`оффер на форуме: +${bonus} денег.`);
                player.money += bonus;
            } else {
                logFail('отказы: -6 энергии.');
                player.energy = clamp(player.energy - 6, 0, 100);
            }
            return;
        }
        case 'referral': {
            const chance = roll(1, 6) + luck;
            if (chance >= 5) {
                const bonus = 90 + roll(0, 60);
                logSuccess(`реферальный бонус: +${bonus} денег.`);
                player.money += bonus;
            } else {
                logFail('без результата: -1ч времени.');
                player.time = clamp(player.time - 1, 0, 24);
            }
            return;
        }
        case 'interview': {
            const chance = roll(1, 6) + luck + (player.skill >= 3 ? 1 : 0);
            if (chance >= 5) {
                const bonus = 160 + roll(0, 80);
                logSuccess(`успешное интервью: +${bonus} денег и +1 к карьере.`);
                player.money += bonus;
                player.career += 1;
            } else {
                logFail('неудача: -10 энергии.');
                player.energy = clamp(player.energy - 10, 0, 100);
            }
            return;
        }
        case 'startupRoll': {
            const chance = roll(1, 6) + luck;
            if (chance >= 5) {
                const bonus = 240 + roll(0, 160);
                logSuccess(`рост стартапа: +${bonus} денег и +0.30 к навыку.`);
                player.money += bonus;
                player.skill = Number((player.skill + 0.3).toFixed(2));
            } else {
                const loss = 110 + roll(0, 90);
                logFail(`потери: -${loss} денег.`);
                player.money = Math.max(0, player.money - loss);
            }
            return;
        }
        case 'pitchDay': {
            const chance = roll(1, 6) + luck + (player.skill >= 2.5 ? 1 : 0);
            if (chance >= 5) {
                const bonus = 180 + roll(0, 120);
                logSuccess(`питч удался: +${bonus} денег.`);
                player.money += bonus;
            } else {
                logFail('питч провалился: -5 энергии и -1ч времени.');
                player.energy = clamp(player.energy - 5, 0, 100);
                player.time = clamp(player.time - 1, 0, 24);
            }
            return;
        }
        case 'freelanceBrief': {
            const chance = roll(1, 6) + luck + (player.skill >= 2 ? 1 : 0);
            if (chance >= 4) {
                const bonus = 90 + roll(0, 90);
                logSuccess(`нашёлся заказ: +${bonus} денег.`);
                player.money += bonus;
            } else {
                logFail('переговоры сорвались: -4 энергии.');
                player.energy = clamp(player.energy - 4, 0, 100);
            }
            return;
        }
        case 'checkup': {
            if (effect.skillGateHint && sector.minSkillForWork) {
                addLog(`${player.name}: заметка — для работы тут нужен навык ${sector.minSkillForWork.toFixed(1)}.`, 'warning');
            }
            return;
        }
        default:
            return;
    }
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
            <span>$${player.money} | Навык ${player.skill.toFixed(1)} | Ходы ${player.turnsLeft}</span>
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
    buyTurnButton.textContent = `⭐ Купить ход (${player.extraTurnPrice})`;
    nextTurnButton.textContent = `➡️ Передать ход`;

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

    if (gameState.winnerId) {
        addLog(`Игра завершена: победил игрок #${gameState.winnerId}.`, 'warning');
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
    registerCareerProgress(player, sector, 'work');
    if (player.perks?.nextWorkIncomeBonus) {
        player.perks.nextWorkIncomeBonus = 0;
    }

    addLog(`${player.name} работает в "${sector.name}": +${income} денег.`, 'positive');
    checkWin(player);
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

    if (gameState.winnerId) {
        addLog(`Игра завершена: победил игрок #${gameState.winnerId}.`, 'warning');
        return;
    }

    if (!consumeTurn(player)) {
        return;
    }

    const track = getTrack(player);
    const cost = Math.round(sector.studyCost * (track ? track.studyCostMultiplier : 1));

    if (player.money < cost) {
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

    const perkSkill = player.perks?.nextStudySkillBonus ? 1 + player.perks.nextStudySkillBonus : 1;
    const baseSkillGain = sector.studySkill * (track ? track.studySkillMultiplier : 1) * perkSkill;
    const skillGain = Number(baseSkillGain.toFixed(2));

    player.money -= cost;
    player.time -= sector.studyTime;
    player.energy = Math.max(0, Math.min(100, player.energy - sector.studyEnergy));
    player.skill = Number((player.skill + skillGain).toFixed(2));
    player.career += 2;
    player.studiedThisWeek += 1;
    registerCareerProgress(player, sector, 'study');
    if (player.perks?.nextStudySkillBonus) {
        player.perks.nextStudySkillBonus = 0;
    }

    addLog(`${player.name} учится в "${sector.name}": -${cost} денег, +${skillGain.toFixed(2)} к навыку.`, 'positive');
    checkWin(player);
    if (autoPassTurnIfNoTime()) {
        return;
    }
    renderStats();
    renderSectorInfo();
}

function moveToSector(sectorId) {
    const player = getActivePlayer();
    const targetSectorId = parseInt(sectorId);

    if (gameState.winnerId) {
        addLog(`Игра завершена: победил игрок #${gameState.winnerId}.`, 'warning');
        return;
    }

    if (player.positionId === targetSectorId) {
        addLog(`${player.name}: вы уже находитесь в "${getCurrentSector(player).name}".`, 'warning');
        return;
    }

    // НОВОЕ: Рассчитываем расстояние между клетками
    const distance = getDistanceBetweenSectors(player.positionId, targetSectorId);

    const moveMoneyCost = 25; // Стоимость в деньгах
    const moveTimeCost = distance * 1; // Время: расстояние × 1 час за клетку
    const moveEnergyCost = distance * 2; // Энергия: расстояние × 2 (как вы просили)

    if (player.money < moveMoneyCost) {
        addLog(`${player.name}: недостаточно денег на переход.`, 'warning');
        return;
    }

    if (player.time < moveTimeCost) {
        addLog(`${player.name}: недостаточно времени для перемещения (требуется ${moveTimeCost}ч).`, 'warning');
        if (player.time <= 0) {
            autoPassTurnIfNoTime();
        }
        return;
    }

    if (player.energy < moveEnergyCost) {
        addLog(`${player.name}: недостаточно энергии на перемещение (требуется ${moveEnergyCost}).`, 'warning');
        return;
    }

    const prevSectorName = getCurrentSector(player).name;
    player.money -= moveMoneyCost;
    player.positionId = targetSectorId;
    player.time -= moveTimeCost;
    player.energy = Math.max(0, player.energy - moveEnergyCost);

    const currentSector = getCurrentSector(player);
    addLog(`${player.name} перемещается: "${prevSectorName}" → "${currentSector.name}" (расстояние: ${distance} клеток, -${moveEnergyCost} энергии, -${moveTimeCost}ч).`, 'positive');
    registerCareerProgress(player, currentSector, 'move');
    applyEnterEffect(player, currentSector);
    checkWin(player);

    if (autoPassTurnIfNoTime()) {
        return;
    }
    renderStats();
    renderSectorInfo();
}

function renderSectorInfo() {
    const player = getActivePlayer();
    const sector = getCurrentSector(player);
    if (!sector) {
        return;
    }

    const minSkillForWork = sector.minSkillForWork || 0;
    const track = getTrack(player);
    const selectedTrackLabel = track ? `${track.name} (авто)` : 'формируется по вашим клеткам';
    const categoryLabel = getCategoryLabel(sector.cellCategory);
    const winText = gameState.winnerId
        ? `<div class="win-banner"><strong>Игра завершена.</strong> Победил игрок #${gameState.winnerId}.<br><span>${gameState.winnerReason}</span></div>`
        : '';
    const studyPreview = (
        sector.studySkill
        * (track ? track.studySkillMultiplier : 1)
        * (player.perks?.nextStudySkillBonus ? 1 + player.perks.nextStudySkillBonus : 1)
    ).toFixed(2);

    sectorInfoElement.innerHTML = `
        <h4>${sector.name}</h4>
        <p>Игрок: <strong>${player.name}</strong></p>
        ${winText}
        <div class="track-panel">
            <p>Карьерный путь: <strong>${selectedTrackLabel}</strong></p>
            <p class="track-note">Путь определяется автоматически по клеткам, где вы работаете и учитесь.</p>
        </div>
        <div class="impact">
            <p>Категория: <strong>${categoryLabel}</strong></p>
            <p>Работа: +${predictWorkIncome(player, sector)} денег</p>
            <p>Учеба: +${studyPreview} к навыку</p>
            <p>Время: ${sector.workTime}ч</p>
            <p>Энергия: -${Math.max(0, sector.workEnergy)}</p>
            <p>Порог работы: ${minSkillForWork > 0 ? minSkillForWork.toFixed(1) : 'нет'}</p>
        </div>
        <div class="action-buttons">
            <button id="workButton" class="invest-button action-work" type="button" ${gameState.winnerId ? 'disabled' : ''}>💼 Работать</button>
            <button id="studyButton" class="invest-button action-study" type="button" ${gameState.winnerId ? 'disabled' : ''}>📚 Учиться</button>
        </div>
        <div class="win-conditions">
            <h5>Победа (любое условие)</h5>
            <ul>
                ${winConditions.map((c) => `<li><strong>${c.title}</strong>: ${c.description}</li>`).join('')}
            </ul>
        </div>
    `;

    const workButton = document.getElementById('workButton');
    const studyButton = document.getElementById('studyButton');

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
    const discount = player.perks?.livingCostDiscount ? player.perks.livingCostDiscount : 0;
    const finalCost = Math.max(0, livingCost - discount);
    player.money -= finalCost;
    if (player.perks) {
        player.perks.livingCostDiscount = 0;
    }

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

    addLog(`${player.name}: ежедневные расходы ${finalCost}${discount ? ` (скидка ${discount})` : ''}, ресурсы обновлены.`);
    checkWin(player);
}

function nextPlayerTurn() {
    eventLogElement.innerHTML = '';

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
    if (gameState.winnerId) {
        addLog(`Игра завершена: победил игрок #${gameState.winnerId}.`, 'warning');
        return;
    }
    if (player.money < player.extraTurnPrice) {
        addLog(`${player.name}: не хватает денег на покупку хода.`, 'warning');
        return;
    }

    player.money -= player.extraTurnPrice;
    player.turnsLeft += 1;
    player.extraTurnPrice += 60;

    addLog(`${player.name} покупает дополнительный ход. ⭐`, 'positive');
    renderStats();
    renderSectorInfo();
}

function resetGame() {
    gameState.day = 1;
    gameState.activePlayerIndex = 0;
    gameState.dayStarterIndex = 0;
    gameState.winnerId = null;
    gameState.winnerReason = '';

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
        player.trackId = null;
        player.careerFocus = {
            it: 0,
            business: 0,
            freelance: 0,
            government: 0,
            police: 0
        };
        player.perks = {
            livingCostDiscount: 0,
            nextWorkIncomeBonus: 0,
            nextStudySkillBonus: 0
        };
        player.stats = {
            eventsTriggered: 0,
            successfulEvents: 0,
            boosts: {
                businessPolice: false,
                itFreelance: false,
                govIt: false,
                policeFreelance: false,
                businessIt: false,
                triadMastery: false
            }
        };
    });

    eventLogElement.innerHTML = '';

    renderStats();
    renderSectorInfo();
    addLog('Сессия сброшена. Игроки начинают маршрут с места #1.');
}

function buildMap() {
    const typeIcons = {
        work: '💼',
        study: '📚',
        mixed: '🎯',
        network: '🤝',
        rest: '🏖️'
    };

    sectors.forEach((sector) => {
        const sectorElement = document.createElement('button');
        sectorElement.type = 'button';
        sectorElement.className = `sector type-${sector.type} category-${sector.cellCategory || 'neutral'}`;
        sectorElement.dataset.id = String(sector.id);
        const icon = typeIcons[sector.type] || '📍';
        const categoryBadge = sector.cellCategory ? getCategoryLabel(sector.cellCategory) : '';
        sectorElement.innerHTML = `
            <span class="sector-icon">${icon}</span>
            <span class="sector-name">${sector.name}</span>
            <span class="sector-meta">Работа: +${sector.workMoney} | Учеба: +${sector.studySkill}</span>
            ${categoryBadge ? `<span class="sector-badge">${categoryBadge}</span>` : ''}
            <div class="player-markers"></div>
        `;

        // Добавляем обработчик клика для перемещения
        sectorElement.addEventListener('click', () => moveToSector(sector.id));

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
