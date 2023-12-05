<template>
  <v-container class="fill-height">
    <v-overlay
        height="100%"
        width="100%"
        openDelay
        persistent
        :model-value="overlay"
        class="align-center justify-center"
      >
      <vue-damp-fireworks style="width: 100%;height: 100%" class="position-relative" duration="5000000">
        <v-card style="z-index: -1; top: 0;background: #064866; display: flex; align-items: center;border-radius: 0px" width="100%" height="100%" background-color="#fff" class="position-absolute">
          <v-img
            v-if="memberSelected"
            :src="imageUrl"
          >
          <template v-slot:placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular
          color="grey-lighten-4"
          indeterminate
        ></v-progress-circular>
      </div>
    </template>
          </v-img>
        </v-card>
        <v-btn
           style="z-index: 1;position: absolute; top: 10px; left: 10px"
                variant="text"
                color="#02aab3"
                @click="overlay = false"
              >
                <v-icon class="mr-2" size="30" color="#fff">
                  mdi-arrow-left-bold-box
                </v-icon>
                <div class="text-white">
                Quay Lại
              </div>
              </v-btn>
      </vue-damp-fireworks>
    </v-overlay>
    <v-responsive class="align-center text-center fill-height">
      <v-card style="background-color: #064866" theme="dark" class="pa-8 d-flex justify-center flex-wrap">
          <v-responsive max-width="550">
            <v-img
              class="mx-auto mt-12 mb-10"
              max-height="140"
              max-width="240"
              src="https://namebook.caynen.vn/assets/logo-61c750d3.svg"
            ></v-img>
            <v-btn class="mb-2" color="#00bdc7" variant="text">
              Kiểm tra thông tin bảo hiểm nhân sự
            </v-btn>
            <!-- <h3>Kiểm tra thông tin bảo hiểm nhân sự </h3> -->

              <v-autocomplete
                v-model="memberSelected"
                :items="items"
                class="flex-full-width"
                density="comfortable"
                item-props
                menu-icon=""
                placeholder="Nhập tên vô đây"
                prepend-inner-icon="mdi-magnify"
                rounded
                theme="light"
                variant="solo"
              >
              </v-autocomplete>
              <v-btn
                size="large"
                color="#02aab3"
                @click="overlay = memberSelected ?  true : false"
              >
              <div class="text-white">
                Kiểm Tra
              </div>
                <v-icon class="ml-2" size="30" color="#fff">
                  mdi-arrow-right-bold-box
                </v-icon>
              </v-btn>
          </v-responsive>
        </v-card>
    </v-responsive>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      overlay: false,
      memberSelected: null,
      items: [
        "Lê Hoàng Long",
        "Lê Văn Hưng",
        "Nguyễn Văn Việt",
        "Vũ Thái Dương",
        "Trần Thùy Linh",
        "Lê Tú Anh",
        "Nguyễn Hữu Tuấn",
        "Lê Đức Thắng",
        "Nguyễn Tiến Đạt",
        "Trịnh Thảo Phương",
        "Đào Thị Kim Ngân",
        "Nguyễn Thị Hường",
        "Đặng Thị Thu Hương",
        "Ngô Thanh Phú An",
        "Nguyễn Như Quỳnh",
        "Lâm Văn Hùng",
        "Mai Thế Anh",
        "Đàm Tiến Đông",
        "Trịnh Hoàng Hiệp",
        "Khúc Thị Lan Anh",
        "Nguyễn Ngọc Long",
        "Phạm Văn Đức",
        "Đặng Thị Phương Thảo",
        "Vũ Thành Toàn",
        "Bùi Phương Mai",
        "Từ Thị Trà My",
        "Trịnh Thị Mai Hương",
        "Đoàn Đức Hiếu",
        "Trần Công Sơn",
        "Trần Công Duy",
        "Đỗ Thị Thu Thảo",
        "Nguyễn Minh Đức"
      ]
    }),
    computed: {
      imageUrl () {
        return new URL(`../assets/${this.memberSelected}.jpg`, import.meta.url).href
      }
    },
    methods: {
      alertsth () {
        alert(';asdads')
      }
    }
  }
</script>
