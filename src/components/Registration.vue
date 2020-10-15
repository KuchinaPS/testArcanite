<template>
    <div class="container">
        <el-form ref="form" :model="form" :rules="rules" label-position="left">
            <div class="wrap">
                <h2 class="form__title">Информация о клиенте</h2>
                <div class="wrapper">
                    <el-form-item label="Фамилия" prop="surname">
                        <el-input v-model="form.surname" class="input"></el-input>
                    </el-form-item>
                    <el-form-item label="Имя" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="Отчество" prop="secondname">
                    <el-input v-model="form.secondname"></el-input>
                </el-form-item>

                <el-form-item label="Дата рождения" prop="date">
                    <el-date-picker type="date" placeholder="Введите дату" v-model="form.date"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="Укажите ваш пол" prop="sex" class="sex">
                    <el-radio-group v-model="form.sex">
                        <el-radio label="Женский" class="sex-item"></el-radio>
                        <el-radio label="Мужской" class="sex-item"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="Номер телефона" prop="tel">
                    <el-input v-model="form.tel" v-mask="'+7 (###) ###-####'"
                              placeholder="+7 (___) ___-____"></el-input>
                </el-form-item>
                <div class="wrapper">
                    <el-form-item label="Укажите группу клиента" prop="clients">
                        <el-select v-model="form.clients" multiple placeholder="Выберите группу"
                                   style="width: 100%;">
                            <el-option label="VIP" value="VIP"></el-option>
                            <el-option label="Проблемные" value="Проблемные"></el-option>
                            <el-option label="ОМС" value="ОМС"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Укажите лечащего врача" prop="doctor">
                        <el-select v-model="form.doctor" placeholder="Выберите врача" style="width: 100%;">
                            <el-option label="Иванов" value="Иванов"></el-option>
                            <el-option label="Захаров" value="Захаров"></el-option>
                            <el-option label="Чернышева" value="Чернышева"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <el-form-item label="Не хочу получать СМС" class="checked">
                    <el-checkbox v-model="form.checked"></el-checkbox>
                </el-form-item>
            </div>
            <div class="wrap">
                <h2 class="form__title">Адрес</h2>
                <el-form-item label="Индекс" prop="index" class="index">
                    <el-input v-model="form.index"
                              type="number"
                              v-mask="'######'"
                    ></el-input>
                </el-form-item>
                <div class="wrapper">
                    <el-form-item label="Страна">
                        <el-input v-model="form.country"></el-input>
                    </el-form-item>
                    <el-form-item label="Область">
                        <el-input v-model="form.place"></el-input>
                    </el-form-item>
                </div>
                <el-form-item label="Город" prop="city">
                    <el-input v-model="form.city"></el-input>
                </el-form-item>
                <div class="wrapper">
                    <el-form-item label="Улица">
                        <el-input v-model="form.street"></el-input>
                    </el-form-item>
                    <el-form-item label="Дом">
                        <el-input v-model="form.build"></el-input>
                    </el-form-item>
                </div>
            </div>
            <div class="wrap">
                <h2 class="form__title">Паспортные данные</h2>
                <el-form-item label="Укажите тип документа" prop="document">
                    <el-select v-model="form.document" placeholder="Тип документа" style="width: 100%;">
                        <el-option label="Паспорт" value="Паспорт"></el-option>
                        <el-option label="Свидетельство о рождении" value="Свидетельство о рождении"></el-option>
                        <el-option label="Вод. удостоверение" value="Вод. удостоверение"></el-option>
                    </el-select>
                </el-form-item>
                <div class="wrapper">
                    <el-form-item label="Номер">
                        <el-input v-model="form.num"
                                  v-mask="'####'"></el-input>
                    </el-form-item>
                    <el-form-item label="Серия" prop="seria">
                        <el-input v-model="form.seria"
                                  type="number"
                                  v-mask="'######'"></el-input>
                    </el-form-item>
                </div>
                <div class="wrapper">
                    <el-form-item label="Кем выдан">
                        <el-input v-model="form.department"></el-input>
                    </el-form-item>
                    <el-form-item label="Дата выдачи" prop="dateout">
                        <el-date-picker type="date" placeholder="Введите дату" v-model="form.dateout"
                                        style="width: 100%;"></el-date-picker>
                    </el-form-item>
                </div>
            </div>
            <el-alert v-show="show_alert"
                      title="Новый клиент успешно создан"
                      type="success"
                      class="alert">
            </el-alert>
            <el-form-item class="btn_container">
                <el-button class="btn-submit" type="primary" @click="submitForm('form')">Создать</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Registration",
        data() {
            return {
                show_alert: false,
                form: {
                    name: '',
                    surname: '',
                    secondname: '',
                    sex: '',
                    date: '',
                    tel: '',
                    clients: [],
                    doctor: '',
                    checked: false,
                    index: '',
                    country:'',
                    place:'',
                    city: '',
                    street:'',
                    build:'',
                    document: '',
                    num: '',
                    seria: '',
                    department:'',
                    dateout: '',
                },
                rules: {
                    surname: [
                        {required: true, message: 'Не указана фамилия', trigger: 'blur'},
                        {pattern: /^([А-ЯЁ]|[а-яё])*$/, message: 'Фамилия не может содержать цифр и латинских букв', trigger: 'blur'},
                    ],
                    name: [
                        {required: true, message: 'Не указано имя', trigger: 'blur'},
                        {pattern: /^([А-ЯЁ]|[а-яё])*$/, message: 'Имя не может содержать цифр и латинских букв', trigger: 'blur'}
                    ],
                    secondname: [
                        {required: true, message: 'Не указано отчество', trigger: 'blur'},
                        {pattern: /^([А-ЯЁ]|[а-яё])*$/, message: 'Отчество не может содержать цифр и латинских букв', trigger: 'blur'}
                    ],
                    date: {required: true, message: 'Не указана дата рождения', trigger: 'blur'},
                    sex: {required: true, message: 'Вы не указали ваш пол', trigger: 'blur'},
                    clients: {required: true, message: 'Не выбрана ни одна группа', trigger: 'blur'},
                    doctor: {required: true, message: 'Не выбран врач', trigger: 'blur'},
                    tel:
                        {required: true, message: 'Не веден номер телефона', trigger: 'blur'},
                    index: {
                        min: 6,
                        max: 6,
                        message: 'Неверная длина индекса. Длина индекса 6 символов',
                        trigger: 'blur'
                    },
                    city: {required: true, message: 'Не указан город проживания', trigger: 'blur'},

                    document: {required: true, message: 'Не выбран тип документа', trigger: 'blur'},
                    num: {
                        min: 4,
                        max: 4,
                        message: 'Неверная длина номера',
                        trigger: 'blur'
                    },
                    seria: {
                        min: 6,
                        max: 6,
                        message: 'Неверная длина серии',
                        trigger: 'blur'
                    },
                    dateout: {required: true, message: 'Не указана дата выдачи паспорта', trigger: 'blur'}
                }
            }
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.show_alert = true;
                        setTimeout(() => {
                            this.show_alert = false;
                        }, 10000)
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>

    .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 50px;
        background-color: #ffffff;
        border-radius: 4px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 30px;
        position: relative;
    }

    @media (max-width: 530px) {
        .wrapper {
            gap: 5px;
        }
    }

    .wrap {
        position: relative;
    }

    h2 {
        text-align: left;
        position: relative;
        font-size: 1.5rem;
    }


    .form__title {
        margin-bottom: 30px;
        border-bottom: 2px solid #FF6828;
        padding-bottom: 20px;
    }

    .btn_container {
        display: flex;
    }

    .btn-submit {
        background-color: #FF6828;
        border-color: #FF6828;
        outline: none;
    }

    .btn-submit:hover,
    .btn-submit:focus {
        border: 1px solid #A63B0D;
    }

    .btn-submit:active {
        background-color: #A63B0D;
    }

    .sex,
    .checked,
    .index {
        display: flex;
    }

    @media (max-width: 420px) {
        .sex {
            flex-direction: column;
        }
    }

    .alert {
        margin-bottom: 20px;
        background-color: #1EBF7E;
        color: #ffffff;
    }

</style>