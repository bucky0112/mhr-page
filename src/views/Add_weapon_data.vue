<script>
export default {
  name: 'Add_weapon_data',
  data() {
    return {
      weaponData: {
        title: '',
        intro: '',
        img: '',
        operating: {
          btn_use: '',
          sp_skills: '',
          other_note: '',
        },
      },
    };
  },
};
</script>

<template>
  <b-container>
    <b-row>
      <b-col>
        <b-form>
          <b-form-group label="武器名稱:" label-for="title">
            <b-form-input
              id="title"
              v-model="weaponData.title"
              type="text"
              placeholder="請輸入武器名稱"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="武器簡介:" label-for="intro">
            <b-form-textarea
              id="intro"
              v-model="weaponData.intro"
              placeholder="請輸入武器簡介"
              required>
            </b-form-textarea>
          </b-form-group>
        </b-form>
      </b-col>
      <b-col>
        <b-form>
          <b-form-group label="武器名稱:" label-for="title">
            <b-form-input
              id="title"
              v-model="weaponData.title"
              type="text"
              placeholder="請輸入武器名稱"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="武器基本操作:" label-for="btn-use">
            <b-form-textarea
              id="btn-use"
              v-model="weaponData.btn_use"
              placeholder="請輸入武器基本操作"
              required>
            </b-form-textarea>
          </b-form-group>

          <b-form-group label="鐵蟲絲技能:" label-for="sp-skills">
            <b-form-textarea
              id="sp-skills"
              v-model="weaponData.sp_skills"
              placeholder="請輸入鐵蟲絲技能"
              required>
            </b-form-textarea>
          </b-form-group>

          <b-form-group label="其他事項:" label-for="other-note">
            <b-form-textarea
              id="other-note"
              v-model="weaponData.other_note"
              placeholder="請輸入其他事項"
              required>
            </b-form-textarea>
          </b-form-group>

        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>
