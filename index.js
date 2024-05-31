var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var DataProcessor = /** @class */ (function () {
    function DataProcessor() {
    }
    DataProcessor.generateBookReference = function (authors, title, edition, year, city, publisher, totalPages, manyAuthors, lastAuthor, editors) {
        var _a, _b, _c, _d;
        var addDash = ((_a = document.querySelector('input[name="addDash"]:checked')) === null || _a === void 0 ? void 0 : _a.value) === 'addDash';
        var includePages = ((_b = document.querySelector('input[name="pagesNeeded"]:checked')) === null || _b === void 0 ? void 0 : _b.value) === 'includePages';
        var gostReference = '';
        if (manyAuthors) {
            var lastAuthor_1 = (_c = document.getElementById('lastAuthor')) === null || _c === void 0 ? void 0 : _c.value.trim();
            var editors_1 = (_d = document.getElementById('editors')) === null || _d === void 0 ? void 0 : _d.value.trim();
            gostReference = "".concat(title, " / ").concat(authors.join(', '));
            if (lastAuthor_1) {
                gostReference += ", ".concat(lastAuthor_1, " \u0438 \u0434\u0440.");
                if (editors_1) {
                    gostReference += "; \u043F\u043E\u0434 \u0440\u0435\u0434. ".concat(editors_1);
                }
            }
            else if (editors_1) {
                gostReference += ", \u041F\u043E\u0434 \u0440\u0435\u0434. ".concat(editors_1);
            }
            // gostReference += ". ";
        }
        else {
            gostReference = "".concat(authors.join(', '), " ").concat(title, ".");
        }
        if (edition) {
            gostReference += " ".concat(addDash ? '- ' : '').concat(edition, " \u0438\u0437\u0434.");
        }
        if (city && publisher) {
            gostReference += " ".concat(addDash ? '-' : '', " ").concat(city, ": ").concat(publisher);
        }
        if (year) {
            gostReference += ", ".concat(year, ".");
        }
        if (includePages && totalPages) {
            gostReference += " ".concat(addDash ? '-' : '', " ").concat(totalPages, " \u0441.");
        }
        return gostReference;
    };
    DataProcessor.generateJournalArticleReference = function (authors, articleTitle, journalName, publicationYear, issueNumber, pages) {
        var _a, _b;
        var includePages = ((_a = document.querySelector('input[name="pagesNeeded"]:checked')) === null || _a === void 0 ? void 0 : _a.value) === 'includePages';
        var addDash = ((_b = document.querySelector('input[name="addDash"]:checked')) === null || _b === void 0 ? void 0 : _b.value) === 'addDash';
        var reference = '';
        if (addDash) {
            reference += "".concat(authors, " ").concat(articleTitle, " // ").concat(journalName, ". - ").concat(publicationYear, ". - \u2116").concat(issueNumber, ".");
        }
        else {
            reference += "".concat(authors, " ").concat(articleTitle, " // ").concat(journalName, ". ").concat(publicationYear, ". \u2116").concat(issueNumber, ".");
        }
        if (includePages) {
            if (addDash) {
                reference += "".concat(addDash ? '-' : '', " \u0421. ").concat(pages, ".");
            }
            
        }
        return reference;
    };
    DataProcessor.generateInternetResourceReference = function (resourceTitle, siteName, hyperlink, accessDate) {
        var _a;
        var accessDateInput = (_a = document.getElementById('accessDate')) === null || _a === void 0 ? void 0 : _a.value;
        var accessDateParts = accessDateInput ? accessDateInput.split('-') : [];
        var formattedAccessDate = accessDateParts.length === 3 ? "".concat(accessDateParts[2], ".").concat(accessDateParts[1], ".").concat(accessDateParts[0]) : '';
        var reference = '';
        if (resourceTitle) {
            reference += "".concat(resourceTitle, " // ");
        }
        if (accessDateInput) {
            reference += "".concat(siteName, " URL: ").concat(hyperlink, " (\u0434\u0430\u0442\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F: ").concat(formattedAccessDate, ").");
        }
        else {
            reference += "".concat(siteName, " URL: ").concat(hyperlink, " (\u0434\u0430\u0442\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F: \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430).");
        }
        return reference;
    };
    return DataProcessor;
}());
var BibliographicReference = /** @class */ (function () {
    function BibliographicReference(reference) {
        this.reference = reference;
    }
    BibliographicReference.prototype.displayReference = function () {
        var referenceContainer = document.getElementById('reference');
        if (referenceContainer) {
            referenceContainer.innerText = this.reference;
        }
    };
    BibliographicReference.prototype.copyReference = function () {
        return __awaiter(this, void 0, void 0, function () {
            var referenceContainer, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        referenceContainer = document.getElementById('reference');
                        if (!referenceContainer) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(referenceContainer.innerText)];
                    case 2:
                        _a.sent();
                        alert('Ссылка успешно скопирована');
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        alert('Ошибка при копировании ссылки');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BibliographicReference;
}());
var DataInputPage = /** @class */ (function () {
    function DataInputPage(sourceType, manyAuthors, includePages) {
        this.sourceType = sourceType;
        this.manyAuthors = manyAuthors;
        this.includePages = includePages;
    }
    DataInputPage.prototype.getInputFields = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        var authors = (_a = document.getElementById("".concat(this.sourceType, "Authors"))) === null || _a === void 0 ? void 0 : _a.value.trim().split(',');
        var title = (_b = document.getElementById("".concat(this.sourceType, "Title"))) === null || _b === void 0 ? void 0 : _b.value.trim();
        var edition = (_c = document.getElementById('edition')) === null || _c === void 0 ? void 0 : _c.value.trim();
        var year = parseInt((_d = document.getElementById('year')) === null || _d === void 0 ? void 0 : _d.value.trim());
        var city = (_e = document.getElementById('city')) === null || _e === void 0 ? void 0 : _e.value.trim();
        var publisher = (_f = document.getElementById('publisher')) === null || _f === void 0 ? void 0 : _f.value.trim();
        var totalPages = parseInt((_g = document.getElementById('totalPages')) === null || _g === void 0 ? void 0 : _g.value.trim());
        var lastAuthor = (_h = document.getElementById('lastAuthor')) === null || _h === void 0 ? void 0 : _h.value.trim();
        var editors = (_j = document.getElementById('editors')) === null || _j === void 0 ? void 0 : _j.value.trim();
        var articleTitle = (_k = document.getElementById('articleTitle')) === null || _k === void 0 ? void 0 : _k.value.trim();
        var journalName = (_l = document.getElementById('journalName')) === null || _l === void 0 ? void 0 : _l.value.trim();
        var publicationYear = parseInt((_m = document.getElementById('publicationYear')) === null || _m === void 0 ? void 0 : _m.value.trim());
        var issueNumber = (_o = document.getElementById('issueNumber')) === null || _o === void 0 ? void 0 : _o.value.trim();
        var pages = (_p = document.getElementById('pages')) === null || _p === void 0 ? void 0 : _p.value.trim();
        var resourceTitle = (_q = document.getElementById('resourceTitle')) === null || _q === void 0 ? void 0 : _q.value.trim();
        var siteName = (_r = document.getElementById('siteName')) === null || _r === void 0 ? void 0 : _r.value.trim();
        var hyperlink = (_s = document.getElementById('hyperlink')) === null || _s === void 0 ? void 0 : _s.value.trim();
        var accessDate = (_t = document.getElementById('accessDate')) === null || _t === void 0 ? void 0 : _t.value.trim();
        return {
            authors: authors,
            title: title,
            edition: edition,
            year: year,
            city: city,
            publisher: publisher,
            totalPages: totalPages,
            lastAuthor: lastAuthor,
            editors: editors,
            articleTitle: articleTitle,
            journalName: journalName,
            publicationYear: publicationYear,
            issueNumber: issueNumber,
            pages: pages,
            resourceTitle: resourceTitle,
            siteName: siteName,
            hyperlink: hyperlink,
            accessDate: accessDate
        };
    };
    return DataInputPage;
}());
var AdditionalQuestions = /** @class */ (function () {
    function AdditionalQuestions() {
    }
    AdditionalQuestions.generateAdditionalQuestions = function (sourceType, manyAuthors, includePages) {
        var additionalQuestionsHTML = '';
        if (sourceType === 'book') {
            additionalQuestionsHTML = "\n                <h2>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u043A\u043D\u0438\u0433\u0438:</h2>\n                <label for=\"bookTitle\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438:</label><br>\n                <input type=\"text\" id=\"bookTitle\" required><br>\n                <label for=\"bookAuthors\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B \u0430\u0432\u0442\u043E\u0440\u0430/\u0430\u0432\u0442\u043E\u0440\u043E\u0432, \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E:</label><br>\n                <input type=\"text\" id=\"bookAuthors\" required><br>\n                <label for=\"edition\">\u041D\u043E\u043C\u0435\u0440 \u0438\u0437\u0434\u0430\u043D\u0438\u044F, \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C:</label><br>\n                <input type=\"number\" id=\"edition\"><br>\n                <label for=\"city\">\u0413\u043E\u0440\u043E\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430:</label><br>\n                <input type=\"text\" id=\"city\" required><br>\n                <label for=\"publisher\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0438\u0437\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430:</label><br>\n                <input type=\"text\" id=\"publisher\" required><br>\n                <label for=\"year\">\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F:</label><br>\n                <input type=\"number\" id=\"year\" required><br>\n            ";
            if (includePages) {
                additionalQuestionsHTML += "\n                    <label for=\"totalPages\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043E\u0431\u0449\u0435\u0435 \u0432 \u043A\u043D\u0438\u0433\u0435:</label><br>\n                    <input type=\"number\" id=\"totalPages\" required><br>\n                ";
            }
            if (manyAuthors) {
                additionalQuestionsHTML += "\n                    <label for=\"lastAuthor\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B \u0430\u0432\u0442\u043E\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0443\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0432 \u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0438 \u0430\u0432\u0442\u043E\u0440\u043E\u0432 (\u0437\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0441\u044F \u0435\u0441\u043B\u0438 \u0435\u0441\u0442\u044C \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u0432\u0442\u043E\u0440\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0442\u0441\u044F):</label><br>\n                    <input type=\"text\" id=\"lastAuthor\"><br>\n                    <label for=\"editors\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B \u0430\u0432\u0442\u043E\u0440\u0430/\u0430\u0432\u0442\u043E\u0440\u043E\u0432, \u043F\u043E\u0434 \u0440\u0435\u0434\u0430\u043A\u0446\u0438\u0435\u0439 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E/\u044B\u0445 \u0438\u0434\u0435\u0442 \u043A\u043D\u0438\u0433\u0430 (\u0432 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C \u043F\u0430\u0434\u0435\u0436\u0435):</label><br>\n                    <input type=\"text\" id=\"editors\"><br>\n                ";
            }
        }
        else if (sourceType === 'internetResource') {
            additionalQuestionsHTML = "\n                <h2>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442-\u0440\u0435\u0441\u0443\u0440\u0441\u0430:</h2>\n                <label for=\"resourceTitle\">\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0441\u0442\u0430\u0442\u044C\u0438 \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430:</label><br>\n                <input type=\"text\" id=\"resourceTitle\"><br>\n                <label for=\"siteName\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430:</label><br>\n                <input type=\"text\" id=\"siteName\" required><br>\n                <label for=\"hyperlink\">\u0413\u0438\u043F\u0435\u0440\u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442:</label><br>\n                <input type=\"url\" id=\"hyperlink\" required><br>\n                <label for=\"accessDate\">\u0414\u0430\u0442\u0430 \u043E\u0431\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u0430\u0439\u0442:</label><br>\n                <input type=\"date\" id=\"accessDate\" required><br>\n            ";
        }
        else if (sourceType === 'journalArticle') {
            additionalQuestionsHTML = "\n                <h2>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0441\u0442\u0430\u0442\u044C\u0438 \u0438\u0437 \u0436\u0443\u0440\u043D\u0430\u043B\u0430:</h2>\n                <label for=\"journalArticleAuthors\">\u0424\u0430\u043C\u0438\u043B\u0438\u044F, \u0438\u043D\u0438\u0446\u0438\u0430\u043B\u044B \u0430\u0432\u0442\u043E\u0440\u0430/\u0430\u0432\u0442\u043E\u0440\u043E\u0432, \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E:</label><br>\n                <input type=\"text\" id=\"journalArticleAuthors\" required><br>\n                <label for=\"articleTitle\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0430\u0442\u044C\u0438:</label><br>\n                <input type=\"text\" id=\"articleTitle\" required><br>\n                <label for=\"journalName\">\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0436\u0443\u0440\u043D\u0430\u043B\u0430:</label><br>\n                <input type=\"text\" id=\"journalName\" required><br>\n                <label for=\"publicationYear\">\u0413\u043E\u0434 \u0438\u0437\u0434\u0430\u043D\u0438\u044F:</label><br>\n                <input type=\"number\" id=\"publicationYear\" required><br>\n                <label for=\"issueNumber\">\u041D\u043E\u043C\u0435\u0440 \u0436\u0443\u0440\u043D\u0430\u043B\u0430:</label><br>\n                <input type=\"text\" id=\"issueNumber\" required><br>\n\n            ";
            if (includePages) {
                additionalQuestionsHTML += "\n                    <label for=\"pages\">\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0442\u0430\u0442\u044C\u0438 \u0432 \u0436\u0443\u0440\u043D\u0430\u043B\u0435:</label><br>\n                    <input type=\"text\" id=\"pages\" required><br>\n                ";
            }
        }
        return additionalQuestionsHTML;
    };
    return AdditionalQuestions;
}());
function handleSubmit(event) {
    var _a, _b, _c;
    event.preventDefault();
    var sourceType = (_a = document.querySelector('input[name="sourceType"]:checked')) === null || _a === void 0 ? void 0 : _a.value;
    var manyAuthors = ((_b = document.querySelector('input[name="authorsCount"]:checked')) === null || _b === void 0 ? void 0 : _b.value) === 'manyAuthors';
    var includePages = ((_c = document.querySelector('input[name="pagesNeeded"]:checked')) === null || _c === void 0 ? void 0 : _c.value) === 'includePages';
    var inputData = new DataInputPage(sourceType, manyAuthors, includePages);
    var fieldsData = inputData.getInputFields();
    var gostReference = '';
    switch (sourceType) {
        case 'book':
            // Проверяем, что поле authors определено и не пустое
            if (fieldsData.authors && fieldsData.authors.length > 0) {
                gostReference = DataProcessor.generateBookReference(fieldsData.authors, fieldsData.title, fieldsData.edition, fieldsData.year, fieldsData.city, fieldsData.publisher, fieldsData.totalPages, manyAuthors, fieldsData.lastAuthor, fieldsData.editors);
            }
            else {
                // Если поле authors не определено или пустое, присваиваем пустую строку
                gostReference = '';
            }
            break;
        case 'journalArticle':
            // Проверяем, что поле authors определено и не пустое
            if (fieldsData.authors && fieldsData.authors.length > 0) {
                gostReference = DataProcessor.generateJournalArticleReference(fieldsData.authors.join(', '), fieldsData.articleTitle, fieldsData.journalName, fieldsData.publicationYear, fieldsData.issueNumber, fieldsData.pages);
            }
            else {
                // Если поле authors не определено или пустое, присваиваем пустую строку
                gostReference = '';
            }
            break;
        case 'internetResource':
            // Проверяем, что все необходимые поля для интернет-ресурса заполнены
            if (fieldsData.resourceTitle) {
                gostReference = DataProcessor.generateInternetResourceReference(fieldsData.resourceTitle, fieldsData.siteName, fieldsData.hyperlink, fieldsData.accessDate);
            }
            else {
                // Если какое-то из полей не заполнено, присваиваем пустую строку
                gostReference = '';
            }
            break;
        default:
            break;
    }
    var reference = new BibliographicReference(gostReference);
    reference.displayReference();
    // Формирование второго блока вопросов в зависимости от введенных данных
    var additionalQuestionsHTML = AdditionalQuestions.generateAdditionalQuestions(sourceType, manyAuthors, includePages);
    var additionalFieldsContainer = document.getElementById('additionalFields');
    if (additionalFieldsContainer) {
        additionalFieldsContainer.innerHTML = additionalQuestionsHTML;
    }
    // Скрываем кнопку "ОК"
    var okButton = document.querySelector('button[type="submit"]');
    if (okButton) {
        okButton.setAttribute('style', 'display: none;');
    }
    // Показываем кнопку "Сформировать ссылку"
    var generateButton = document.getElementById('generateButton');
    if (generateButton) {
        generateButton.setAttribute('style', 'display: block;');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Привязываем обработчики событий
    var form = document.getElementById('sourceForm');
    form.addEventListener('submit', handleSubmit);
    var generateButton = document.createElement('button');
    generateButton.innerText = 'Сформировать ссылку';
    generateButton.id = 'generateButton'; // Добавлено id для кнопки "Сформировать ссылку"
    generateButton.addEventListener('click', handleSubmit);
    form.appendChild(generateButton);
    var copyButton = document.getElementById('copyButton');
    if (copyButton) {
        copyButton.addEventListener('click', function () {
            var reference = new BibliographicReference(document.getElementById('reference').innerText);
            reference.copyReference();
        });
    }
});
