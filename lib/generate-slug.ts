function removeVietnameseTones(str: string) {
    return str
        .normalize("NFD") // chuẩn hóa thành ký tự base + dấu
        .replace(/[\u0300-\u036f]/g, "") // xóa các dấu
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");
}

export function generateSlug(title: string, id: string) {
    const noAccent = removeVietnameseTones(title);
    const slug =
        noAccent
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "") + `-${id}`;
    return slug;
}